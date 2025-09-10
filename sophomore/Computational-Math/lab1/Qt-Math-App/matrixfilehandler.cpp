#include "matrixfilehandler.h"
#include <fstream>
#include <qdebug.h>
#include <qmessagebox.h>
#include <vector>
#include "matrixinputwidget.h"

void MatrixFileHandler::saveSystemToFile(const QVector<QVector<double>>& matrix,
                                         const QVector<double>& rhs,
                                         const QString& filename) {
    YAML::Emitter out;
    out << YAML::BeginMap;

    // Save coefficient matrix
    out << YAML::Key << "matrix" << YAML::Value << YAML::BeginSeq;
    for (const auto& row : matrix) {
        std::vector<double> stdRow(row.begin(), row.end());
        out << YAML::Flow << stdRow;
    }
    out << YAML::EndSeq;

    // Save RHS values
    out << YAML::Key << "rhs" << YAML::Value << YAML::Flow
        << std::vector<double>(rhs.begin(), rhs.end());

    out << YAML::EndMap;

    std::ofstream file(filename.toStdString());
    if (file.is_open()) {
        file << out.c_str();
        file.close();
    }
}



QPair<QVector<QVector<double>>, QVector<double>>
                    MatrixFileHandler::loadSystemFromFile(const QString& filename) {
    qDebug() << "Loading matrix and RHS from file...";
    QVector<QVector<double>> matrix;
    QVector<double> rhs;

    YAML::Node file = YAML::LoadFile(filename.toStdString());
    if (!file.IsMap()) {
        qWarning() << "Invalid YAML format!";
        return qMakePair(QVector<QVector<double>>(), QVector<double>());
    }

    // Load the coefficient matrix
    if (file["matrix"].IsSequence()) {
        for (const auto& row : file["matrix"]) {
            QVector<double> rowVector;
            for (const auto& value : row) {
                rowVector.append(value.as<double>());
            }
            matrix.append(rowVector);
        }
    } else {
        qWarning() << "Matrix data is missing or not a sequence.";
    }

    // Load the RHS values
    if (file["rhs"].IsSequence()) {
        for (const auto& value : file["rhs"]) {
            rhs.append(value.as<double>());
        }
    } else {
        qWarning() << "RHS data is missing or not a sequence.";
    }

    // Check if matrix is square
    int rowCount = matrix.size();
    bool isSquare = true;
    for (const auto& row : matrix) {
        if (row.size() != rowCount) {
            isSquare = false;
            break;
        }
    }

    if (!isSquare) {
        qWarning() << "Loaded matrix is not square!";
        return qMakePair(QVector<QVector<double>>(), QVector<double>());
    }

    qDebug() << "Matrix loaded successfully:";
    MatrixInputWidget::debugPrintDoubleArray(matrix, matrix.size());
    qDebug() << "RHS loaded successfully: " << rhs;

    return qMakePair(matrix, rhs);
}
