// script.js

// Инициализация кнопок
document.getElementById('blogger').addEventListener('click', () => {
    console.log('Блогер нажал на кнопку!');
    alert('Добро пожаловать, блогер!');
});

document.getElementById('advertiser').addEventListener('click', () => {
    console.log('Рекламодатель нажал на кнопку!');
    alert('Добро пожаловать, рекламодатель!');
});

// Проверка WebAssembly и предотвращение его использования
if (typeof WebAssembly !== 'undefined') {
    console.warn('WebAssembly обнаружен, но не используется.');
    WebAssembly.instantiate = function () {
        throw new Error('WebAssembly запрещен в этом приложении.');
    };
    WebAssembly.compile = function () {
        throw new Error('WebAssembly запрещен в этом приложении.');
    };
}
