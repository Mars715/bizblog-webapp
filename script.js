if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.expand();

    document.getElementById("message").textContent = "Выберите вашу роль:";
    document.getElementById("roleBlogger").style.display = "inline-block";
    document.getElementById("roleAdvertiser").style.display = "inline-block";

    document.getElementById("roleBlogger").onclick = () => tg.sendData("blogger");
    document.getElementById("roleAdvertiser").onclick = () => tg.sendData("advertiser");
} else {
    console.error("Telegram Web App API недоступно. Проверьте настройки.");
    document.getElementById("message").textContent = "Ошибка подключения к Telegram Web App.";
}
