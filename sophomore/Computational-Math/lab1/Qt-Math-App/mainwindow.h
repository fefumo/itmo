#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QBoxLayout>
#include <QInputDialog>
#include <QDebug>
#include <QFileDialog>
#include <QString>
#include <QMessageBox>
#include <QSpinBox>
#include <QSplitter>
#include <QPushButton>

#include "matrixfilehandler.h"
#include "resultswidget.h"
#include "matrixinputwidget.h"
#include "matrixprocessor.h"

QT_BEGIN_NAMESPACE
namespace Ui {
class MainWindow;
}
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();
    ResultsWidget *resultsWidget;  // Made this public for MatrixProcessor to access

private slots:
    void computeDeterminant();
    void openFileDialog();
    void openEpsilonDialog();

private:
    Ui::MainWindow *ui;
    MatrixInputWidget *matrixInputWidget;
    QString selectedFile;
    QMessageBox messageBox;
    MatrixFileHandler *matrixFileHandler;
    QLabel *fileLabel;
    MatrixProcessor *matrixProcessor;
    void setupLayouts();
};

#endif // MAINWINDOW_H
