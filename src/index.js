import loadPage from "./loadpage";
import loadMenu from "./menu";
import loadContact from "./contact";

// create 3 buttons
// append them to the page
// add event listener -> call the relevant load function

const homeTab = document.createElement('button');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    loadPage();
});

const menuTab = document.createElement('button');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    loadMenu();
});

const contactTab = document.createElement('button');
contactTab.textContent = 'Contact';
contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    loadContact();
});

document.body.appendChild(homeTab);
document.body.appendChild(menuTab);
document.body.appendChild(contactTab);

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

loadPage();