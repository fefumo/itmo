#ifndef MATRIXFILEHANDLER_H
#define MATRIXFILEHANDLER_H

#include <QVector>
#include <QString>
#include <yaml-cpp/yaml.h>

class MatrixFileHandler {
public:
    MatrixFileHandler() = default;
    void saveSystemToFile(const QVector<QVector<double>>& matrix,
                                             const QVector<double>& rhs,
                                             const QString& filename);
    QPair<QVector<QVector<double>>, QVector<double>>
                                                loadSystemFromFile(const QString& filename);
};

#endif // MATRIXFILEHANDLER_H
