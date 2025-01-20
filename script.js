document.addEventListener("DOMContentLoaded", () => {
    try {
        console.log("Initializing Telegram WebApp...");
        const tg = window.Telegram.WebApp;

        if (!tg) {
            throw new Error("Telegram WebApp API недоступен. Проверьте настройки.");
        }

        // Инициализация WebApp
        tg.ready();

        // Проверка и установка темы
        const theme = tg.themeParams;
        if (theme.bg_color) {
            document.body.style.backgroundColor = `#${theme.bg_color}`;
            document.body.style.color = `#${theme.text_color || "000"}`;
        }

        // Кнопки
        document.getElementById("blogger").addEventListener("click", () => {
            tg.sendData("blogger"); // Отправка данных в Telegram
        });

        document.getElementById("advertiser").addEventListener("click", () => {
            tg.sendData("advertiser");
        });

        // Уведомление, если всё успешно
        console.log("Telegram WebApp успешно инициализирован.");
        document.getElementById("loading-text").innerText = "Выберите вашу роль.";
    } catch (error) {
        console.error(error.message);
        document.getElementById("loading-text").innerText =
            "Ошибка подключения к Telegram Web App.";
    }
});
