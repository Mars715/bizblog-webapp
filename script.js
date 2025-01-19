document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

    // Проверяем, доступен ли WebApp API
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
        const webApp = Telegram.WebApp;

        // Устанавливаем тему приложения в зависимости от темы Telegram
        const isDarkMode = webApp.colorScheme === "dark";
        applyTheme(isDarkMode);

        console.log("WebApp API доступен");
        // Устанавливаем основную тему Telegram
        document.body.style.backgroundColor = webApp.themeParams.bg_color || (isDarkMode ? "#2C2C2C" : "#FFFFFF");
        document.body.style.color = webApp.themeParams.text_color || (isDarkMode ? "#FFFFFF" : "#000000");

        // Обработка кнопок
        const bloggerButton = document.getElementById("blogger-btn");
        const advertiserButton = document.getElementById("advertiser-btn");

        bloggerButton.addEventListener("click", function () {
            console.log("Блогер выбран");
            webApp.sendData("role:blogger");
        });

        advertiserButton.addEventListener("click", function () {
            console.log("Рекламодатель выбран");
            webApp.sendData("role:advertiser");
        });

        // Показываем интерфейс после загрузки
        document.getElementById("loading-message").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        console.error("Telegram Web App API недоступен. Проверьте настройки.");
        document.getElementById("loading-message").style.display = "none";
        document.getElementById("error-message").style.display = "block";
    }
});

// Функция для применения темы
function applyTheme(isDarkMode) {
    const root = document.documentElement;
    if (isDarkMode) {
        root.style.setProperty("--bg-color", "#2C2C2C");
        root.style.setProperty("--text-color", "#FFFFFF");
        root.style.setProperty("--button-bg-color", "#4CAF50");
        root.style.setProperty("--button-text-color", "#FFFFFF");
    } else {
        root.style.setProperty("--bg-color", "#FFFFFF");
        root.style.setProperty("--text-color", "#000000");
        root.style.setProperty("--button-bg-color", "#4CAF50");
        root.style.setProperty("--button-text-color", "#FFFFFF");
    }
}
