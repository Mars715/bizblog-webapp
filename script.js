document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

    // Проверяем доступность Telegram Web App API
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
        const webApp = Telegram.WebApp;

        // Устанавливаем тему приложения
        const isDarkMode = webApp.colorScheme === "dark";
        applyTheme(isDarkMode);

        console.log("WebApp API доступен");
        
        // Обработка кнопок
        const bloggerButton = document.getElementById("blogger-btn");
        const advertiserButton = document.getElementById("advertiser-btn");

        if (bloggerButton && advertiserButton) {
            bloggerButton.addEventListener("click", function () {
                console.log("Блогер выбран");
                webApp.sendData("role:blogger");
            });

            advertiserButton.addEventListener("click", function () {
                console.log("Рекламодатель выбран");
                webApp.sendData("role:advertiser");
            });
        } else {
            console.error("Кнопки не найдены. Проверьте id элементов.");
        }

        // Показываем интерфейс
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
    if (root) {
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
    } else {
        console.error("Root element не найден");
    }
}
