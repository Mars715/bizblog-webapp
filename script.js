document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const buttonsDiv = document.getElementById("buttons");
    const bloggerButton = document.getElementById("blogger");
    const advertiserButton = document.getElementById("advertiser");

    // Проверка доступности WebApp API
    if (window.Telegram && window.Telegram.WebApp) {
        try {
            const tg = window.Telegram.WebApp;

            // Инициализация Telegram WebApp
            tg.ready();

            // Убираем текст загрузки и показываем кнопки
            loadingText.style.display = "none";
            buttonsDiv.style.display = "block";

            // Настройка кнопок
            bloggerButton.addEventListener("click", () => {
                tg.sendData("blogger");
            });

            advertiserButton.addEventListener("click", () => {
                tg.sendData("advertiser");
            });

            console.log("Telegram WebApp API успешно инициализирован.");
        } catch (error) {
            console.error("Ошибка инициализации Telegram WebApp API:", error);
            loadingText.textContent = "Ошибка подключения к Telegram Web App.";
        }
    } else {
        console.error("Telegram WebApp API недоступен.");
        loadingText.textContent = "Ошибка подключения к Telegram Web App.";
    }
});
