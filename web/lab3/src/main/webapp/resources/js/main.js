
document.addEventListener("DOMContentLoaded", function () {
    const svgElement = document.getElementById("graphSvg"); 
    svgElement.addEventListener("click", function (event) {
        console.log('graph clicked')
        const selectedRInput = document.querySelector("input[name='pointForm:r']:checked");
        const r = selectedRInput ? selectedRInput.value : null;
        const svgFormId = 'svg-form'

        // Проверяем, выбрано ли значение R
        if (r === null) {
            alert("Please select a value for R before clicking on the SVG.");
            return;
        }

        const rect = svgElement.getBoundingClientRect();

        const svgX = event.clientX - rect.left; // Click position in SVG width
        const svgY = event.clientY - rect.top;  // Click position in SVG height
        console.log('coorinates x,y: ', svgX, svgY);

        const x = ((svgX - 200) / 170) * r; // Transform SVG X to graph X
        const y = ((200 - svgY) / 170) * r; // Transform SVG Y to graph Y and invert Y-axis

        // Устанавливаем значения скрытых полей
        document.getElementById(svgFormId + ":xValue").value = x.toFixed(3);
        document.getElementById(svgFormId + ":yValue").value = y.toFixed(3);
        document.getElementById(svgFormId + ":rValue").value = r;

        // Программно кликаем на скрытую кнопку
        document.getElementById(svgFormId + ":svgClickButton").click();

    });
});


function updateGraph() {
    
    console.log('in updateGraph');
    const table = document.getElementById("pointForm:resultsTable");

    // Создаем массив для хранения данных
    const points = [];
    
    // Проходим по всем строкам таблицы, кроме первой (она заголовок)
    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
    
        // Извлекаем данные из ячеек строки, обрезая лишние пробелы с помощью trim()
        const x = row.cells[0].innerText.trim();
        const y = row.cells[1].innerText.trim();
        const r = row.cells[2].innerText.trim();
        const result = row.cells[3].innerText.trim();
    
        // Создаем объект с данными и добавляем его в массив
        points.push({
            x: parseFloat(x),       // преобразуем в число
            y: parseFloat(y),       // преобразуем в число
            r: parseFloat(r),       // преобразуем в число
            result: result === 'Hit' // преобразуем в булево значение
        });
    }
    
    console.log('points: ', points);
    
    // Удаляем старые элементы из SVG
    const svg = document.getElementById('graphSvg');
    const oldPoints = svg.querySelectorAll('.circle');
    oldPoints.forEach(point => point.remove());

    
    // Рисуем точки на графике
    for (const point of points) {
        const coordinates = graphToSvgCoordinates(point.x, point.y, point.r);
        console.log('in for loop. coordinates:', coordinates);
    
        drawPoint(coordinates.x, coordinates.y, point.result ? 'green' : 'red');
    }
    
}


function drawPoint(x, y, color) {
    if (isNaN(x) || isNaN(y)) {
        console.log('Invalid data in drawPoint:', x, y);
        return;
    }
    const svgElement = document.getElementById("graphSvg"); 
    console.log('in drawPoint: ', x,y,color);
    const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    point.setAttribute("cx", x);
    point.setAttribute("cy", y);
    point.setAttribute("r", "3");
    point.setAttribute("fill", color);
    point.setAttribute("class", "graph-point");
    svgElement.appendChild(point); 
}

function graphToSvgCoordinates(x, y, r) {
    
    // Transform graph x to SVG x
    const svgX = 200 + (x / r) * 170; // Based on graph setup, 170px corresponds to R
    
    // Transform graph y to SVG y (and invert y-axis)
    const svgY = 200 - (y / r) * 170;
    
    return {x: svgX, y: svgY};
}