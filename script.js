document.addEventListener("DOMContentLoaded", () => {
    try {
        const webApp = window.Telegram.WebApp;
        console.log("Telegram WebApp API loaded:", webApp);

        // Update loading text and show buttons
        document.getElementById("loading-text").innerText = "Выберите вашу роль:";
        document.getElementById("buttons").style.display = "block";

        // Button handlers
        document.getElementById("blogger").addEventListener("click", () => {
            webApp.close();
        });

        document.getElementById("advertiser").addEventListener("click", () => {
            webApp.close();
        });
    } catch (error) {
        console.error("Telegram WebApp API недоступен:", error);
        document.getElementById("loading-text").innerText = "Ошибка подключения к Telegram Web App.";
    }
});
