export default function loadMenu() {
    const content = document.querySelector('#content');

    const burgers = document.createElement('h3');
    burgers.textContent = 'BURGERS';
    content.appendChild(burgers);

    content.appendChild(createMenuItem('RACLETTE BURGERS', '$12'));
    content.appendChild(createMenuItem('SMASH BURGERS', '$10'));
    content.appendChild(createMenuItem('THE FULL WORKS BURGER', '$11'));
    content.appendChild(createMenuItem('JUICY LUCY BURGER', '$12'));
    content.appendChild(createMenuItem('DOUBLE SWISS', '$12'));
    content.appendChild(createMenuItem('BEETROOT BURGER', '$10'));
    content.appendChild(createMenuItem('ASIAN CHICKEN BURGERS', '$11'));

    const drinks = document.createElement('h3');
    drinks.textContent = 'DRINKS';
    content.appendChild(drinks);

    content.appendChild(createMenuItem('Starfruit', '$11'));
    content.appendChild(createMenuItem('Avocado', '$11'));
    content.appendChild(createMenuItem('Bitterground', '$11'));
    content.appendChild(createMenuItem('Dragonfruit', '$11'));
    content.appendChild(createMenuItem('Sugarcane', '$11'));
    content.appendChild(createMenuItem('Honeydew', '$11'));

}

function createMenuItem(name, price) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;

    const priceSpan = document.createElement('span');
    priceSpan.textContent = price;

    item.appendChild(nameSpan);
    item.appendChild(priceSpan);

    return item;
}