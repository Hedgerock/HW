import { cart } from "../renderProduct.js";

export function addToCartProducts() {
    const parent = this.closest('.product');

    const id = parent.dataset.id;

    id in cart 
    ? delete cart[id]
    : cart[id] = 1;

    saveCart();
    renderBtn();
    cartRender();
}

export function cartRender() {
    const totalInCart = document.querySelector('.cart__total-product');

    if(!totalInCart) {
        return;
    }

    const totalAmount = Object.values(cart).reduce((acc, item) => acc + item, 0);

    if (totalAmount == 0) {
        totalInCart.textContent = '';
        return;
    }
    
    totalInCart.textContent = totalAmount;
}

export function renderBtn() {
    const btns = document.querySelectorAll('.product__add-to-cart');

    btns.forEach(btn => {
        const parent = btn.closest('.product');
        const id = parent.dataset.id;

        cart[id] ? btn.textContent = 'Remove From Cart' : btn.textContent = 'Add to Cart'
    })
}

export function saveCart() {
    const currentCart = JSON.stringify(cart);

    localStorage.setItem('cartValue', currentCart);
}