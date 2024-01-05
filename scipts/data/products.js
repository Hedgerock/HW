const products = JSON.parse(localStorage.getItem('data')) || [
    {
        id: 1,
        price: 100,
        img: './img/img2.webp',
        title: 'Product1',
        descriptionMini: 'Hello World mini description',
        descriptionMax: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident adipisci ex in mollitia aperiam, assumenda voluptates voluptas minima officiis distinctio quia eaque beatae impedit iusto dolores omnis libero ab deleniti vel unde? Laudantium dolorem officia aliquid nobis reprehenderit quo?',
    },
    {
        id: 2,
        price: 200,
        img: './img/img3.jpg',
        title: 'Product2',
        descriptionMini: 'Hello World mini description',
        descriptionMax: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident adipisci ex in mollitia aperiam, assumenda voluptates voluptas minima officiis distinctio quia eaque beatae impedit iusto dolores omnis libero ab deleniti vel unde? Laudantium dolorem officia aliquid nobis reprehenderit quo?',
    },
    {
        id: 3,
        price: 300,
        img: './img/img4.jpg',
        title: 'Product3',
        descriptionMini: 'Hello World mini description',
        descriptionMax: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident adipisci ex in mollitia aperiam, assumenda voluptates voluptas minima officiis distinctio quia eaque beatae impedit iusto dolores omnis libero ab deleniti vel unde? Laudantium dolorem officia aliquid nobis reprehenderit quo?',
    },
    {
        id: 4,
        price: 400,
        img: './img/img5.png',
        title: 'Product4',
        descriptionMini: 'Hello World mini description',
        descriptionMax: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident adipisci ex in mollitia aperiam, assumenda voluptates voluptas minima officiis distinctio quia eaque beatae impedit iusto dolores omnis libero ab deleniti vel unde? Laudantium dolorem officia aliquid nobis reprehenderit quo?',
    },
]

export { products }
