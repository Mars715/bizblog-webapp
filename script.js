document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const bloggerButton = document.getElementById("blogger");
    const advertiserButton = document.getElementById("advertiser");

    try {
        const webApp = window.Telegram.WebApp;

        if (!webApp) {
            throw new Error("Telegram WebApp API не инициализировался.");
        }

        console.log("Telegram WebApp API загружен:", webApp);
        loadingText.textContent = "Добро пожаловать!";
        
        bloggerButton.addEventListener("click", () => {
            webApp.close(); // Или любое действие
        });

        advertiserButton.addEventListener("click", () => {
            webApp.close(); // Или любое действие
        });
    } catch (error) {
        console.error("Ошибка инициализации Telegram WebApp API:", error);
        loadingText.textContent = "Ошибка подключения к Telegram Web App.";
    }
});
