function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTimeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('current-time').textContent = currentTimeString;
}

setInterval(updateTime, 1000);

// Запускаем сразу, чтобы не ждать первой секунды
updateTime();