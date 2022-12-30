export default function loadContact() {
    const content = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.textContent = 'contact content';

    content.appendChild(contact);
}