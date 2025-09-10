#ifndef MATRIXPROCESSOR_H
#define MATRIXPROCESSOR_H

#include <QVector>
#include "matrixinputwidget.h"

class MainWindow;
class MatrixProcessor {
public:
    MatrixProcessor(MainWindow &mainWindow, MatrixInputWidget &matrixInputWidget);

    // Main method to run Jacobi method
    void runJacobiMethod(double epsilon, int matrixSize);

private:
    MainWindow& mainWindowRef;
    MatrixInputWidget& matrixWidgetRef;

    // Helper methods
    bool isDiagDominant(QVector<QVector<double>>& m, int size);
    void makeDiagDominant(QVector<QVector<double>>& m, QVector<double>& rhs, int size);

    QVector<QVector<double>> getMatrixValues() const;
    QVector<double> getRHSValues() const;
    void setResultText(const QString& result) const;
    double matrixNorm(QVector<QVector<double>>);
};

#endif // MATRIXPROCESSOR_H
