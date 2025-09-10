#ifndef RESULTSWIDGET_H
#define RESULTSWIDGET_H

#include <QWidget>
#include <QString>
#include <QLabel>
#include <qtextedit.h>

class ResultsWidget : public QWidget
{
    Q_OBJECT
public:
    explicit ResultsWidget(QWidget *parent = nullptr);
    void setText(const QString & text);
    void addText(const QString &text);

private:
    QLabel *titleLabel;
    QTextEdit *resultBox;

signals:

public slots:
    void setDeterminant(double determinant);
};

#endif // RESULTSWIDGET_H
