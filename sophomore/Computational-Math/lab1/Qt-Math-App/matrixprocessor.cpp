#include "matrixprocessor.h"
#include "mainwindow.h"
#include <cmath>
#include <QDebug>
#include <QMessageBox>

MatrixProcessor::MatrixProcessor(MainWindow &mainWindow, MatrixInputWidget &matrixInputWidget) :
    mainWindowRef(mainWindow),
    matrixWidgetRef(matrixInputWidget)
{}

void MatrixProcessor::runJacobiMethod(double epsilon, int matrixSize) {
    mainWindowRef.resultsWidget->setText("Running Jacobi method...");

    // Retrieve matrix and RHS values
    QVector<QVector<double>> matrix = matrixWidgetRef.getMatrixValues();
    QVector<double> rhs = matrixWidgetRef.getRHSValues();

    // Ensure matrix is square and valid
    if (matrix.size() != matrixSize || rhs.size() != matrixSize) {
        QMessageBox::critical(nullptr, "Matrix", "Matrix or RHS size mismatch.");
        return;
    }

    qDebug() << "Matrix in jacobi method:";
    matrixWidgetRef.debugPrintDoubleArray(matrix, matrix.size());

    // Ensure matrix is diagonally dominant
    makeDiagDominant(matrix, rhs, matrixSize);

    // Verify if the matrix is diagonally dominant
    if (!isDiagDominant(matrix, matrixSize)) {
        qDebug() << "Warning: Could not make matrix diagonally dominant. Jacobi method may not converge.";
        mainWindowRef.resultsWidget->addText("Could not make matrix diagonally dominant. Jacobi method may not converge.");
        QMessageBox::critical(nullptr, "Diagonal", "Could not make matrix diagonally dominant. Jacobi method may not converge.");
        return;
    }

    qDebug() << "Diagonalised matrix:";
    matrixWidgetRef.debugPrintDoubleArray(matrix, matrix.size());
    mainWindowRef.resultsWidget->addText("The norm of the diagonal matrix is: " + QString::number(matrixNorm(matrix)));

    // Initial guess (e.g., all zeros)
    QVector<double> x(matrixSize, 0.0);
    QVector<double> newX(matrixSize, 0.0);

    int iteration = 0;
    double error = epsilon + 1.0;  // To start the loop
    QString resultTable =
        "|  k  | x1^k   |  x2^k  | ...... | max diff |\n"
        "| --- | ------ | ------ | ------ | -------- |\n";

    while (error >= epsilon) {
        error = 0.0;
        double maxDiff = 0.0;

        // Start iteration
        for (int i = 0; i < matrixSize; ++i) {
            double sum = rhs[i];

            for (int j = 0; j < matrixSize; ++j) {
                if (i != j) {
                    sum -= matrix[i][j] * x[j];
                }
            }

            newX[i] = sum / matrix[i][i];

            // Check if the computed value is valid
            if (!std::isfinite(newX[i])) {  // Check for NaN or Inf
                mainWindowRef.resultsWidget->addText("Jacobi Method diverged. Unable to find a solution.");
                return;
            }
        }

        // Calculate the maximum difference between new and old x values
        for (int i = 0; i < matrixSize; ++i) {
            double diff = std::fabs(newX[i] - x[i]);
            maxDiff = std::max(maxDiff, diff);
            error += std::pow(newX[i] - x[i], 2);
        }

        error = std::sqrt(error);  // Root sum squared error
        x = newX;  // Update the solution

        // Check if the error is exploding (indicating divergence)
        if (error > 1e9) {  // Large arbitrary threshold for divergence detection
            mainWindowRef.resultsWidget->addText("Jacobi Method diverged. Error exceeded threshold.");
            qWarning("method diverged");
            return;
        }

        // Append iteration results to the result table
        resultTable += "| " + QString::number(iteration) + "  | ";
        for (int i = 0; i < matrixSize; ++i) {
            resultTable += QString::number(x[i], 'f', 6) + " | ";
        }

        if (maxDiff == x[x.size()-1])
            resultTable += " ------------ |\n";
        else
            resultTable += QString::number(maxDiff, 'f', 6) + " |\n";

        ++iteration;

        qDebug() << "Iteration" << iteration << "Error" << error << "Max Diff" << maxDiff;
    }


    // Final result message
    QString result = "Jacobi Method Converged in " + QString::number(iteration) + " iterations.\n";
    for (int i = 0; i < matrixSize; ++i) {
        result += "X" + QString::number(i+1) + " = " + QString::number(x[i]) + "\n";
    }

    // Update the results widget with the final table and result
    mainWindowRef.resultsWidget->addText(resultTable);
    mainWindowRef.resultsWidget->addText(result);
}

bool MatrixProcessor::isDiagDominant(QVector<QVector<double>>& m, int size) {
    for (int i = 0; i < size; i++) {
        double sumOfOthers = 0.0;
        for (int j = 0; j < size; j++) {
            if (i != j) {
                sumOfOthers += std::abs(m[i][j]);
            }
        }

        if (std::abs(m[i][i]) <= sumOfOthers) {
            qDebug() << "Row" << i << "is not diagonally dominant.";
            return false;
        }
    }
    return true;
}

double MatrixProcessor::matrixNorm(QVector<QVector<double>> matrix) {
    double maxSum = 0.0;  // To store the maximum row sum
    for (int i = 0; i < matrix.size(); i++) {
        double rowSum = 0.0;  // Sum of the current row
        for (int j = 0; j < matrix[i].size(); j++) {
            if (i != j) {  // Skip the diagonal element
                rowSum += std::abs(matrix[i][j]);
            }
        }
        maxSum = std::max(maxSum, rowSum);  // Keep track of the maximum sum
    }
    return maxSum;
}



void MatrixProcessor::makeDiagDominant(QVector<QVector<double>>& m, QVector<double>& rhs, int size) {
    qDebug() << "trying to make diagonal dominant...";
    for (int i = 0; i < size; i++) {
        int maxIndex = i;
        double maxValue = std::abs(m[i][i]);

        // Find the largest absolute value in column i
        for (int j = i + 1; j < size; j++) {
            if (std::abs(m[j][i]) > maxValue) {
                maxValue = std::abs(m[j][i]);
                maxIndex = j;
            }
        }

        // Swap rows if necessary
        if (maxIndex != i) {
            std::swap(m[i], m[maxIndex]);
            std::swap(rhs[i], rhs[maxIndex]);
        }
    }


}

