// Функция, которая преобразует координаты клика в формат, понятный для сервера
function convertCoordinates(event) {
    const r = document.getElementById("r").value; // Получаем значение R из формы
    const svg = document.getElementById("graphSvg");
    const rect = svg.getBoundingClientRect();
    const xClick = event.clientX - rect.left;
    const yClick = event.clientY - rect.top;

    console.log("clicks: ", xClick, yClick, '\n');
    const x = (xClick - 200) / (40 * r);
    const y = (200 - yClick) / (40 * r);
    console.log("converted: ",x,y,'\n' );

    // Устанавливаем значения в скрытые поля
    document.getElementById("tableFrom:convertedX").value = parseFloat(x.toFixed(2));
    document.getElementById("tableFrom:convertedY").value = parseFloat(y.toFixed(2));

    console.log(document.getElementById("tableFrom:convertedX").value, '\n');
    console.log(document.getElementById("tableFrom:convertedY").value, '\n')
}
// Обработчик клика
function handleClick(event) {
    convertCoordinates(event); // Получаем преобразованные координаты
    // Теперь можно отправить форму
    document.getElementById("tableForm:sendSvgCoordinatesButton").click(); // Нажимаем на кнопку, чтобы отправить форму
}
// Функция, которая будет вызвана после завершения Ajax-запроса
function handleComplete() {
    // Здесь можно выполнить действия после получения ответа сервера, если это необходимо
}