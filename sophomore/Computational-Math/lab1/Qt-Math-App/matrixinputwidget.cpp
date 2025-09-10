#include "matrixinputwidget.h"

MatrixInputWidget::MatrixInputWidget(QWidget *parent)
    : QWidget{parent}
{
    QVBoxLayout *layout = new QVBoxLayout(this);

    // add the gridlayout
    gridLayout = new QGridLayout();
    layout->addLayout(gridLayout);

    sizeInput = new QSpinBox(this);
    sizeInput->setRange(2,20);
    sizeInput->setMinimum(1);
    sizeInput->setMaximum(21);
    sizeInput->setValue(2); // default size

    layout->addWidget(sizeInput);

    // initialize default matrix
    changeMatrixSize(sizeInput->value());

    connect(sizeInput, SIGNAL(valueChanged(int)), this, SLOT(changeMatrixSize(int)));
    this->setMaximumSize(800, 600); // Set reasonable bounds

}

 void MatrixInputWidget::debugPrintDoubleArray(const QVector<QVector<double>>m, int n) {
    qDebug() << "Printing array of size" << n << "x" << n << ":";

    for (int i = 0; i < n; i++) {
        QString rowStr;
        for (int j = 0; j < n; j++) {
            rowStr += QString::number(m[i][j]) + " ";
        }
        qDebug() << rowStr.trimmed();
    }
}


int MatrixInputWidget::getMatrixSize(){
    return matrixCells.size();
}

QVector<QVector<QLineEdit*>> MatrixInputWidget::getMatrix(){
    return matrixCells;
}

void MatrixInputWidget::changeMatrixSize(int size){
    for (auto &row : matrixCells){
        for (auto *cell : row){
            gridLayout->removeWidget(cell);
            delete cell;
        }
    }
    for (QLineEdit *cell: rightSideCells){
        gridLayout->removeWidget(cell);
        delete cell;
    }
    for (QLabel *label : equalSigns) {
        gridLayout->removeWidget(label);
        delete label;
    }

    // Clear and resize containers
    matrixCells.clear();
    rightSideCells.clear();
    equalSigns.clear();
    matrixCells.resize(size);
    rightSideCells.resize(size);
    equalSigns.resize(size);

    for (int i = 0; i < size; i++) {
        matrixCells[i].resize(size);

        for (int j = 0; j < size; j++) {
            QLineEdit *cell = new QLineEdit();
            QDoubleValidator* validator = new QDoubleValidator(-10000.0, 10000.0, 2, this);
            cell->setValidator(validator);

            gridLayout->addWidget(cell, i, j);
            matrixCells[i][j] = cell;
        }

        // Create a QLabel for the "=" sign (non-editable)
        QLabel *equalSign = new QLabel("=");
        equalSign->setAlignment(Qt::AlignCenter);
        equalSign->setStyleSheet("font-weight: bold; font-size: 14px;");

        gridLayout->addWidget(equalSign, i, size);
        equalSigns[i] = equalSign;

        // Create a separate QLineEdit for the RHS (after "=" sign)
        QLineEdit *rhsCell = new QLineEdit(); // RHS = right-hand side
        QDoubleValidator* rhsValidator = new QDoubleValidator(-10000.0, 10000.0, 2, this);
        rhsCell->setValidator(rhsValidator);
        rhsCell->setStyleSheet("background: lightgray; color: black;");

        gridLayout->addWidget(rhsCell, i, size + 1);  // Place RHS in the column after "="
        rightSideCells[i] = rhsCell;
    }

    emit matrixSizeChanged(size);
}

void getCofactor(QVector<QVector<double>>& mat, QVector<QVector<double>>& temp, int p, int q, int n)
{
    int i = 0, j = 0;

    // Loop to fill the temporary matrix (temp)
    for (int row = 0; row < n; ++row) {
        for (int col = 0; col < n; ++col) {
            if (row != p && col != q) {
                temp[i][j++] = mat[row][col];
                if (j == n - 1) {
                    j = 0;
                    i++;
                }
            }
        }
    }
    qDebug() << "temp matrix after getCofactor: ";
    MatrixInputWidget::debugPrintDoubleArray(temp, temp.size());
}

//TODO: put this into another class
/* Recursive function for finding the
   determinant of matrix. n is current
   dimension of mat[][]. */
double determinantOfMatrix(QVector<QVector<double>>& mat, int n)
{
    qDebug() << "in determinantOfMatrix func, matrix:";
    MatrixInputWidget::debugPrintDoubleArray(mat, n);

    double D = 0;

    // Base case: if matrix contains a single element
    if (n == 1)
        return mat[0][0];

    // To store cofactors
    QVector<QVector<double>> temp(n - 1, QVector<double>(n - 1));

    // To store sign multiplier
    int sign = 1;

    // Iterate for each element of the first row
    for (int f = 0; f < n; f++)
    {
        // Get cofactor of numericMatrix[0][f]
        qDebug() << "calling getCofactor()";
        getCofactor(mat, temp, 0, f, n);
        D += sign * mat[0][f] * determinantOfMatrix(temp, n - 1);

        // Alternate signs
        sign = -sign;
    }

    return D;
}


double MatrixInputWidget::readValuesAndFindDeterminant(QVector<QVector<QLineEdit*>>& mat, int n){
    QVector<QVector<double>> numericMatrix = getMatrixValues();
    double determinant = determinantOfMatrix(numericMatrix, n);
    return determinant;
}

QVector<QVector<double>> MatrixInputWidget::getMatrixValues() const {
    int size = matrixCells.size();
    QVector<QVector<double>> numericMatrix(size, QVector<double>(size));

    qDebug() << "Matrix size in getMatrixValues method " << size;

    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            if (!matrixCells[i][j]) {
                qDebug() << "Invalid QLineEdit pointer at (" << i << ", " << j << ")";
                return numericMatrix;  // Exit early on error
            }

            numericMatrix[i][j] = matrixCells[i][j]->text().toDouble();
        }
    }
    qDebug() << "Matrix values in getMatrixValues method ";
    MatrixInputWidget::debugPrintDoubleArray(numericMatrix, numericMatrix.size());
    return numericMatrix;
}

QVector<double> MatrixInputWidget::getRHSValues() const {
    QVector<double> rhs;
    int size = rightSideCells.size();

    for (int i = 0; i < size; ++i) {
        bool ok;
        double value = rightSideCells[i]->text().toDouble(&ok);
        rhs.append(ok ? value : 0.0);
    }

    qDebug() << "RHS values: " << rhs;
    return rhs;
}

void MatrixInputWidget::setMatrixValues(QVector<QVector<double>>& m) {
    int size = m.size();
    changeMatrixSize(size);

    // After resizing, loop through the matrix and set each QLineEdit value
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            // Ensure the QLineEdit pointer exists at matrixCells[i][j]
            QLineEdit* cell = matrixCells[i][j];

            // Set the text of the QLineEdit to the value from the matrix
            cell->setText(QString::number(m[i][j]));
        }
    }
}

void MatrixInputWidget::setRHSValues(QVector<double>& rhs) {
    int size = rhs.size();
    if (size != rightSideCells.size()) {
        qWarning() << "RHS size mismatch!";
        return;
    }

    for (int i = 0; i < size; i++) {
        QLineEdit* cell = rightSideCells[i];
        cell->setText(QString::number(rhs[i]));
    }
}
