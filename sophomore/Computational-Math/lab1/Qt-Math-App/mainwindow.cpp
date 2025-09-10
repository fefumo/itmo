#include "mainwindow.h"
#include "./ui_mainwindow.h"


MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    qDebug() << "starting application";

    setupLayouts();
}

void MainWindow::setupLayouts(){
    QWidget *centralWidget = new QWidget(this);
    setCentralWidget(centralWidget);

    QHBoxLayout *mainLayout = new QHBoxLayout(centralWidget);

    QSplitter *splitter = new QSplitter(Qt::Horizontal, this);

    // Left side (Matrix input widget)
    QWidget *leftWidget = new QWidget(this);
    QVBoxLayout *leftLayout = new QVBoxLayout(leftWidget);
    matrixInputWidget = new MatrixInputWidget(this);

    // Create MatrixProcessor and pass reference of MainWindow
    matrixProcessor = new MatrixProcessor(*this, *matrixInputWidget);

    fileLabel = new QLabel("File Name: ", this);
    QPushButton *runJacobiButton = new QPushButton("Run Jacobe Method");
    QPushButton *calculateDeterminantButton = new QPushButton("Calculate Determinant", this);
    QPushButton *selectFileButton = new QPushButton("Select File");

    leftLayout->addWidget(matrixInputWidget);
    leftLayout->addWidget(fileLabel);
    leftLayout->addWidget(calculateDeterminantButton);
    leftLayout->addWidget(selectFileButton);
    leftLayout->addWidget(runJacobiButton);

    // Right side (Results widget)
    QWidget *rightWidget = new QWidget(this);
    QVBoxLayout *rightLayout = new QVBoxLayout(rightWidget);
    resultsWidget = new ResultsWidget(this);
    rightLayout->addWidget(resultsWidget);

    splitter->addWidget(leftWidget);
    splitter->addWidget(rightWidget);

    mainLayout->addWidget(splitter);

    splitter->setStyleSheet("QSplitter::handle { background-color: #b0b0b0; }");

    qDebug() << "initiated every widget. waiting for user actions...";

    connect(calculateDeterminantButton, SIGNAL(clicked()), this, SLOT(computeDeterminant()));
    connect(selectFileButton, &QPushButton::clicked, this, &MainWindow::openFileDialog);
    connect(runJacobiButton,&QPushButton::clicked, this, &MainWindow::openEpsilonDialog);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::openEpsilonDialog(){
    qDebug() << "Opened epsilon dialog";

    bool ok;
    double epsilon = QInputDialog::getDouble(this, "Input Epsilon",
                                             "Enter epsilon value:",
                                             0.1, 0.0001, 1.0, 4, &ok);
    if (ok) {
        qDebug() << "Epsilon entered:" << epsilon;
        matrixProcessor->runJacobiMethod(epsilon, matrixInputWidget->getMatrixSize());
    } else {
        qDebug() << "Dialog canceled.";
    }
}

void MainWindow::computeDeterminant(){
    QVector<QVector<QLineEdit*>> matrix = matrixInputWidget->getMatrix();
    double determinant = matrixInputWidget->readValuesAndFindDeterminant(matrix, matrixInputWidget->getMatrixSize());
    resultsWidget->setDeterminant(determinant);
}

void MainWindow::openFileDialog()
{
    qDebug() << "Opened file dialog";
    // Open QFileDialog in a separate window for file selection
    selectedFile = QFileDialog::getOpenFileName(this, tr("Open File"), "", tr("YAML Files (*.yaml *.yml);;"));

    if (!selectedFile.isEmpty()) {
        // Use MatrixFileHandler to load the matrix
        QPair<QVector<QVector<double>>, QVector<double>> systemData = matrixFileHandler->loadSystemFromFile(selectedFile);
        QVector<QVector<double>> matrixData = systemData.first;
        QVector<double> rhs = systemData.second;

        if (matrixData.isEmpty() || rhs.isEmpty()){
            QMessageBox::critical(this, tr("Equations"), tr("Equations are invalid"));
            return;
        }

        // Update the QLabel or QLineEdit with the selected file path
        fileLabel->setText("Current system of equations is loaded from this file: " + selectedFile);

        // Optionally, show a message or take any other action
        QMessageBox::information(this, tr("File Loaded"), tr("System loaded successfully from file!"));

        // Update the UI with the loaded data, for example:
        matrixInputWidget->setMatrixValues(matrixData);
        matrixInputWidget->setRHSValues(rhs);
    }
}
