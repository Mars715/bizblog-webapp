if (window.Telegram && window.Telegram.WebApp) {
    console.log("Telegram Web App подключено!");
    const tg = window.Telegram.WebApp;
    tg.expand();
} else {
    console.error("Telegram Web App API недоступно. Проверьте настройки.");
}
