document.addEventListener("DOMContentLoaded", () => {
    const message = document.getElementById("message");
    const bloggerBtn = document.getElementById("blogger");
    const advertiserBtn = document.getElementById("advertiser");

    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;

        tg.ready();

        console.log("WebApp Init Data:", tg.initDataUnsafe);

        if (!tg.initDataUnsafe || Object.keys(tg.initDataUnsafe).length === 0) {
            message.textContent = "Ошибка: Telegram не передал данные авторизации.";
            console.error("Ошибка: initData пустое.");
        } else {
            message.textContent = "Выберите вашу роль:";
        }

        bloggerBtn.addEventListener("click", () => {
            tg.sendData("blogger");
            message.textContent = "Вы выбрали: Блогер";
        });

        advertiserBtn.addEventListener("click", () => {
            tg.sendData("advertiser");
            message.textContent = "Вы выбрали: Рекламодатель";
        });
    } else {
        message.textContent = "Ошибка подключения к Telegram Web App.";
        console.error("Telegram Web App API недоступно. Проверьте настройки.");
    }
});
