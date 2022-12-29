export default function loadPage() {
    const content = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = '../src/pexels-chan-walrus-941861.jpg';

    const headline = document.createElement('h1');
    headline.textContent = 'Wine Sense';

    const about = document.createElement('p');
    about.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam, placeat animi fuga asperiores dicta natus architecto, officiis quas repellat culpa commodi! Ipsa sint delectus non cum laudantium voluptatem recusandae?';

    content.appendChild(img);
    content.appendChild(headline);
    content.appendChild(about);
}