export default function loadContact() {
    const content = document.querySelector('#content');
    
    const headline = document.createElement('h3');
    headline.textContent = 'DELIVERY';
    const tel = document.createElement('h3');
    tel.textContent = '123-456-789';

    content.appendChild(headline);
    content.appendChild(tel);

    const address = document.createElement('p');
    address.textContent = '123 Nathan Road, Hong Kong.';

    const website = document.createElement('a');
    website.href = '#';
    website.textContent = 'www.burgerland.com';

    content.appendChild(address);
    content.appendChild(website);
}