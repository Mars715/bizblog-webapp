document.addEventListener("DOMContentLoaded", () => {
    // Проверяем доступность Telegram WebApp API
    if (window.Telegram?.WebApp) {
        console.log("Telegram WebApp API доступен");
        const tg = window.Telegram.WebApp;

        // Подготавливаем WebApp
        tg.ready();

        // Проверяем данные, переданные в WebApp
        console.log("initData:", tg.initData);
        console.log("initDataUnsafe:", tg.initDataUnsafe);

        // События на кнопках
        document.getElementById("blogger").addEventListener("click", () => {
            tg.sendData(JSON.stringify({ role: "blogger" }));
        });

        document.getElementById("advertiser").addEventListener("click", () => {
            tg.sendData(JSON.stringify({ role: "advertiser" }));
        });
    } else {
        console.error("Telegram WebApp API недоступен");
        document.getElementById("loading-text").innerText = "Ошибка подключения к Telegram Web App.";
    }
});
