document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const buttonsDiv = document.getElementById("buttons");
    const bloggerButton = document.getElementById("blogger");
    const advertiserButton = document.getElementById("advertiser");

    try {
        // Проверяем наличие объекта Telegram.WebApp
        if (window.Telegram && window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;

            // Инициализируем WebApp
            tg.ready();
            console.log("Telegram WebApp API успешно загружен.");

            // Показать кнопки и скрыть текст загрузки
            loadingText.style.display = "none";
            buttonsDiv.style.display = "block";

            // Обработчики кнопок
            bloggerButton.addEventListener("click", () => {
                tg.sendData("blogger");
            });

            advertiserButton.addEventListener("click", () => {
                tg.sendData("advertiser");
            });
        } else {
            throw new Error("Telegram WebApp API недоступен.");
        }
    } catch (error) {
        console.error("Ошибка:", error.message);
        loadingText.textContent = "Ошибка подключения к Telegram Web App.";
    }
});
