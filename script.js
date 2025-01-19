if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    console.log("Telegram Web App подключено!");
    tg.expand();

    const themeParams = tg.themeParams || {};
    document.body.style.backgroundColor = themeParams.bg_color || "#ffffff";
    document.body.style.color = themeParams.text_color || "#000000";

    document.getElementById("message").textContent = "Выберите вашу роль:";
    document.getElementById("roleBlogger").style.display = "inline-block";
    document.getElementById("roleAdvertiser").style.display = "inline-block";

    document.getElementById("roleBlogger").onclick = () => {
        tg.sendData("blogger");
        alert("Вы выбрали: Блогер");
    };

    document.getElementById("roleAdvertiser").onclick = () => {
        tg.sendData("advertiser");
        alert("Вы выбрали: Рекламодатель");
    };
} else {
    console.error("Telegram Web App API недоступно. Проверьте настройки.");
    document.getElementById("message").textContent = "Ошибка подключения к Telegram Web App.";
}
