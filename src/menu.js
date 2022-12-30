export default function loadMenu() {
    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.textContent = 'menu content';

    content.appendChild(menu);
}