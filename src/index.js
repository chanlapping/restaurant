import loadPage from "./loadpage";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';



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

const footer = document.createElement('footer');
footer.innerHTML = `<p>
<a href="https://www.freepik.com/free-photo/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast_22292762.htm#query=hamburger&position=14&from_view=search&track=sph">Image by KamranAydinov</a> on Freepik
</p>
<p>
<a href="https://wepik.com/edit/duotone-burger-food-menu-6403013">Menu template</a> created by Wepik
</p>`;

document.body.appendChild(footer);

homeTab.classList.add('active');
loadPage();