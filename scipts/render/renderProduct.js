export const cart = JSON.parse(localStorage.getItem('cartValue')) || [];

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

export function addToCartProducts() {
    const parent = this.closest('.product');

    const id = parent.dataset.id;
    const index = cart.indexOf(id);

    index !== -1 
    ? cart.splice(index, 1)
    : cart.push(id);

    saveCart();
    renderBtn();
    cartRender();
}

function cartRender() {
    const totalInCart = document.querySelector('.cart__total-product');
    const savedCartValue = JSON.parse(localStorage.getItem('cartValue')) || [];

    if (!cart.length) {
        totalInCart.textContent = '';
        return;
    }
    
    totalInCart.textContent = savedCartValue.length;
}

export function renderBtn() {
    const btns = document.querySelectorAll('.product__add-to-cart');

    btns.forEach(btn => {
        const parent = btn.closest('.product');
        const id = parent.dataset.id;

        cart.includes(id) ? btn.textContent = 'Remove From Cart' : btn.textContent = 'Add to Cart'
    })
}

function saveCart() {
    const currentCart = JSON.stringify(cart);

    localStorage.setItem('cartValue', currentCart);
}

console.log(cart);