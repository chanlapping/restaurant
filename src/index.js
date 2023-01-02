import loadPage from "./loadpage";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

// create 3 buttons
// append them to the page
// add event listener -> call the relevant load function

const homeTab = document.createElement('button');
homeTab.textContent = 'Home';
homeTab.classList.add('tab');
homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    homeTab.classList.add('active');
    menuTab.classList.remove('active');
    contactTab.classList.remove('active');
    loadPage();
});

const menuTab = document.createElement('button');
menuTab.textContent = 'Menu';
menuTab.classList.add('tab');
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    menuTab.classList.add('active');
    homeTab.classList.remove('active');
    contactTab.classList.remove('active');
    loadMenu();
});

const contactTab = document.createElement('button');
contactTab.textContent = 'Contact';
contactTab.classList.add('tab');
contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    contactTab.classList.add('active');
    homeTab.classList.remove('active');
    menuTab.classList.remove('active');
    loadContact();
});

const tabContainer = document.createElement('div');
tabContainer.classList.add('tabs-container');

tabContainer.appendChild(homeTab);
tabContainer.appendChild(menuTab);
tabContainer.appendChild(contactTab);

document.body.appendChild(tabContainer);

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

homeTab.classList.add('active');
loadPage();