import Img from './burger.jpg';

export default function loadPage() {
    const content = document.querySelector('#content');

    const topImg = new Image();
    topImg.src = Img;

    const headline = document.createElement('h1');
    headline.textContent = 'BURGERLAND';

    const businessHours = document.createElement('p');
    businessHours.textContent = `Open Monday - Sunday 12:00 -23:00`;

    const tel = document.createElement('p');
    tel.textContent = 'Delivery Order: 123-456-789';

    content.appendChild(topImg);
    content.appendChild(headline);
    content.appendChild(businessHours);
    content.appendChild(tel);
}

// <a href="https://www.freepik.com/free-photo/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast_22292762.htm#query=hamburger&position=14&from_view=search&track=sph">Image by KamranAydinov</a> on Freepik