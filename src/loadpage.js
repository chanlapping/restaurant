import Img from './pexels-chan-walrus-941861.jpg';

export default function loadPage() {
    const content = document.querySelector('#content');

    const topImg = new Image();
    topImg.src = Img;

    const headline = document.createElement('h1');
    headline.textContent = 'Wine Sense';

    const about = document.createElement('p');
    about.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam, placeat animi fuga asperiores dicta natus architecto, officiis quas repellat culpa commodi! Ipsa sint delectus non cum laudantium voluptatem recusandae?';

    content.appendChild(topImg);
    content.appendChild(headline);
    content.appendChild(about);
}