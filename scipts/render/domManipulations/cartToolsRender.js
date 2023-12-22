import { products } from "../../data/products.js";
import { cart } from "../renderProduct.js";
import { cartRender, saveCart, renderBtn } from "../cartUtils/cartUtils.js";
import { removeDomComponents } from "../renderSingleProduct.js";

export function productIncrementer() {
    const btns = document.querySelectorAll('.cart-current-products-count__btn_increment');

    btns.forEach((btn) => {
        btn.onclick = function() {
            const parentEl = this.closest('.cart-product');
            const currentCount = parentEl.querySelector('.cart-current-products-count__current-value')
            const id = parentEl.dataset.id;
            cart[id]++;
            currentCount.textContent = cart[id];
            updateTotalPrice(parentEl, id)

            if (cart[id] >= 2) {
                const decrementBtn = parentEl.querySelector('.cart-current-products-count__btn_decrement');
                decrementBtn.removeAttribute('disabled');
            }

            if (cart[id] >= 10) {
                btn.setAttribute('disabled', '');
            }

            cartRender()
            saveCart();
        }
    })
}

export function productDecrementer() {
    const btns = document.querySelectorAll('.cart-current-products-count__btn_decrement');

    btns.forEach((btn) => {
        btn.onclick = function() {
            const parentEl = this.closest('.cart-product');
            const currentCount = parentEl.querySelector('.cart-current-products-count__current-value');
            const incrementBtn = parentEl.querySelector('.cart-current-products-count__btn_increment');
            const id = parentEl.dataset.id;
            cart[id]--;
            currentCount.textContent = cart[id];
            updateTotalPrice(parentEl, id)

            cart[id] == 1 ? btn.setAttribute('disabled', '') : btn.removeAttribute('disabled')

            if (cart[id] < 10) {
                incrementBtn.removeAttribute('disabled');
            }

            cartRender();
            saveCart();
        }
    })
}

export function initRemoveBtn(parentEl, title) {
    const removeBtns = document.querySelectorAll('.cart-products__remove-product');

    removeBtns.forEach(btn => {
        btn.onclick = function() {
            const parent = this.parentElement
            const id = parent.dataset.id
            delete cart[id];
            if(Object.keys(cart).length === 0) {
                parentEl.append(title);
            }
            removeDomComponents(parent);
            cartRender();
            renderBtn();
            initTotalPrice();
            saveCart();
        }
    })
}


export function updateTotalPrice(parentEl, id) {
    const totalPrice = parentEl.querySelector('.cart-products__total-price')

    const content =  products.find(item => item.id == id).price * cart[id];

    totalPrice.textContent = content;
    initTotalPrice();
}

export function initTotalPrice() {
    const allAmounts = document.querySelectorAll('.cart-products__total-price');
    const allAmount = document.querySelector('.amount-box__total-price');
    const arr = [];

    allAmounts.forEach(item => {arr.push(Number(item.textContent))});

    const total = arr.reduce((acc, item) => acc + item, 0);

    allAmount.textContent = total;
}