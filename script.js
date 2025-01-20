document.addEventListener("DOMContentLoaded", () => {
    if (window.Telegram?.WebApp) {
        const webApp = window.Telegram.WebApp;
        console.log("WebApp initialized:", webApp);
        webApp.expand();

        document.getElementById("blogger").addEventListener("click", () => {
            webApp.showAlert("Блогер функция тестируется!");
        });

        document.getElementById("advertiser").addEventListener("click", () => {
            webApp.showAlert("Рекламодатель функция тестируется!");
        });
    } else {
        console.error("Telegram WebApp API недоступен. Проверьте настройки.");
        document.getElementById("loading-text").textContent = "Ошибка инициализации WebApp.";
    }
});
