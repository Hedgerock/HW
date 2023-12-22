import { cartRender, renderBtn, addToCartProducts } from "./cartUtils/cartUtils.js";

export const cart = JSON.parse(localStorage.getItem('cartValue')) || {};

export const renderProduct = (selector, data) => {
    const parent = document.querySelector(selector);

    let allBtns = '';

    const {id, price, img, title, descriptionMini} = data;

    const picture = img ? img : 'noImg.jpg'

    const html = 
    `
    <div class="product" data-id = "${id}">
        <div class="product__img">
            <img src="./img/${picture}" alt="">
        </div>
        <div class = "description">
            <div class="product__title">${title}</div>
            <p class="product__descr">${descriptionMini}</p>
            <div class="product__price-block">
                <span class = "product__price">${price}</span>
                <button class="product__add-to-cart">add to cart</button>
            </div>
        </div>
    </div>
    `

    parent.insertAdjacentHTML('beforeend', html)

    allBtns = document.querySelectorAll('.product__add-to-cart');

    allBtns.forEach(btn => {
        btn.onclick = addToCartProducts;
    })

    cartRender();
    renderBtn();
}

console.log(cart);