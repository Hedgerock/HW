import { cart } from "./renderProduct.js";
import { products } from "../data/products.js";
import { productDecrementer, productIncrementer, initTotalPrice, initRemoveBtn } from "./domManipulations/cartToolsRender.js";

export function renderProductsInCart(parentEl) {
    const title = document.querySelector('.cart-box__title')
    const arr = Object.keys(cart);

    const filteredProducts = products
    .filter(item => arr.includes(item.id.toString()))
    .map((item) => {
        const img = item.img ? item.img : './img/noImg.jpg'
        const decrAttr = cart[item.id] == 1 ? 'disabled' : '';
        const incrAttr = cart[item.id] >= 10 ? 'disabled' : '';
        return `
        <div class = "cart-product" data-id = ${item.id}>
            <div class= "cart-product-img">
                <img class="cart-product-img__picture" src = '${img}' alt = "">
            </div>
            <h3 class = "cart-product__title">${item.title}</h3>
            <div class = "cart-current-products-count">
                <button class = "cart-current-products-count__btn cart-current-products-count__btn_decrement" ${decrAttr}>
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span class = "cart-current-products-count__current-value">${cart[item.id]}</span>
                <button class= "cart-current-products-count__btn cart-current-products-count__btn_increment" ${incrAttr}>
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
            <div class="cart-products__total-price">${item.price * Number(cart[item.id])}</div>
            <button class = "cart-products__remove-product">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        `})
    .join('');


    if (filteredProducts) {
        parentEl.insertAdjacentHTML('beforeend', filteredProducts);
        title.remove();
    }

    productDecrementer();
    
    productIncrementer();
   
    initTotalPrice();
    
    initRemoveBtn(parentEl, title);
}