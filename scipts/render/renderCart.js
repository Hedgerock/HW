import { removeDomComponents } from "./renderSingleProduct.js";
import { renderProductsInCart } from "./renderProductsInCart.js";
import { initTotalPrice } from "./domManipulations/cartToolsRender.js";

export const renderCartContent = () => {
    const body = document.body;
    body.style.overflow = 'hidden';

    const layout = document.createElement('div');
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const productsInCart = document.createElement('div');
    const closeBtn = document.createElement('button');
    const totalAmountBox = document.createElement('div');
    const confirmOrder = document.createElement('button');
    const totalAmount = document.createElement('span');

    layout.className = 'cart-layout';
    layout.onclick = function() {
        removeDomComponents(layout, container);
        body.removeAttribute('style');
    }

    container.className = 'container container_cart';

    title.className = 'cart-box__title';
    title.textContent = 'Cart is empty';

    productsInCart.className = 'products-box';

    closeBtn.className = 'product-description__close-btn product-description__close-btn_cart';
    closeBtn.textContent = 'close';
    closeBtn.onclick = function() {
        removeDomComponents(layout, container);
        body.removeAttribute('style');
    }

    totalAmountBox.className = 'amount-box';
    confirmOrder.className = 'amount-box__confirm-btn';
    totalAmount.className = 'amount-box__total-price';

    confirmOrder.textContent = 'order now';
    totalAmount.textContent = initTotalPrice;

    body.append(container, layout);
    container.append(productsInCart, closeBtn, totalAmountBox);
    productsInCart.append(title);
    totalAmountBox.append(totalAmount, confirmOrder);

    renderProductsInCart(productsInCart);
}