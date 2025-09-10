#ifndef MATRIXINPUTWIDGET_H
#define MATRIXINPUTWIDGET_H

#include <QWidget>
#include <QLineEdit>
#include <QGridLayout>
#include <QSpinBox>
#include <QLabel>
#include <QLineEdit>

class MatrixInputWidget : public QWidget
{
    Q_OBJECT
public:
    explicit MatrixInputWidget(QWidget *parent = nullptr);
    double readValuesAndFindDeterminant(QVector<QVector<QLineEdit*>>&, int);
    static void debugPrintDoubleArray(const QVector<QVector<double>>, int);

    void setMatrixValues(QVector<QVector<double>>&);
    void setRHSValues(QVector<double>&);
    QVector<QVector<double>> getMatrixValues() const;
    int getMatrixSize();
    QVector<QVector<QLineEdit*>> getMatrix();
    QVector<double> getRHSValues() const;
signals:
    void matrixSizeChanged(int);

private slots:
    void changeMatrixSize(int);

private:
    QGridLayout *gridLayout;
    QSpinBox *sizeInput;
    QVector<QVector<QLineEdit*>> matrixCells;
    QVector<QLineEdit*> rightSideCells;
    QVector<QLabel*> equalSigns;  // Stores the "=" labels
};

#endif // MATRIXINPUTWIDGET_H
