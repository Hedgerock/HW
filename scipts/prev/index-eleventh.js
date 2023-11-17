const menu = document.querySelector('.main-menu');
const menuContent = document.querySelector('.shop-content')
const cartBtnDetails = document.querySelector('.cart-button');
const sliderSlides = document.querySelector('.slider-slides');
const dots = document.querySelector('.dots');
const btnPrev = document.querySelector('.slider-buttons__button_prev');
const btnNext = document.querySelector('.slider-buttons__button_next');
const box = document.querySelector('.box');
const productList = document.querySelector('.product-list');
const contentDiv = document.querySelector('.content');
const showContent = document.querySelector('.show-content');

const mainMenuList = mainMenu.map(function (item) {
    return `
        <li class = "menu-element">
            <a class = "menu-element__link" href = ${item.link}>
                ${item.title}
            </a>
        </li>
    `
}).join('');

const sliderList = sliderContent.map(function(item) {
    return `
        <a class = "slide" href = ${item.link}>
            <div class = "slide__img">
                <img class = "slide__image slide__image_small" src = ${item.pictureSmall} alt = "">
                <img class = "slide__image slide__image_big" src = ${item.picture} alt = "">
            </div>
            <div class = "slide-content">
                <h3 class = "slide-content__title">${item.title}</h3>
                <p class = "slide-content__text">
                    ${item.text}
                </p>
            </div>
        </a>
    `
}).join('');

const accordionStructure = accordionElements.map(function(item) {
    return `
        <div class = "box-item">
            <button class = "accordion-button">
                <i class="fa-solid fa-plus"></i>
            </button>
            <h2 class = "box-item__title">ACCORDION</h2>
            <div class = "accordion-block">
                <h2 class = "accordion-block__title">${item.title}</h2>
                <div class = "accordion-block__text">
                    ${item.text}
                </div>
            </div>
        </div>
    `
}).join('');

const contentBlocks = content.map(function(item) {
    return `
    <div class = "paragraph-block">
        <h3 class = "paragraph-block__title">${item.title}</h3>
        <p class = "paragraph-block__text">
            ${item.paragraph}
        </p>
        <p class = "paragraph-block__text paragraph-block__text_hidden">
            ${item.hiddenContent}
        </p>
        <button class = "paragpaph-block__button"> read more </button>
    </div>
    `
}).join('');


const productListElem = products.map(function (item) {
    return `
        <div class = "product-list-elem">
            <span class = "promotion">
                ${item.promotion}
            </span>
            <button class = "add-to-favorites">
                <i class = "add-to-favorites__icon fa-regular fa-heart"></i>
            </button>
            <button class = "add-to-compare">
                <i class="add-to-comapare__icon fa-solid fa-scale-balanced"></i>
            </button>
            <a class = "product-picture" href = ${item.href}>
                <img class= "product-picture__img" src = ${item.src} alt = ${item.alt}>
            </a>
            <h3 class = "product-title">
                <a class = "product-list__link" href = ${item.href}>
                ${item.title}
                </a>
            </h3>
            <div class = "product-rates">
                <a class = "stars" href = ${item.comments} data-comments = ${item.commentsAmount}></a>
            </div>
            <div class = "product-info">
                <span class = "product-info__price" data-actual = ${item.price}>
                    ${item.currentPrice}
                </span>
                <button class = "product-info__order">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <span class = "delivery-status">
                ${item.deliveryStatus}
            </span>
        </div>
    `
}).join('');

menu.innerHTML = mainMenuList;
sliderSlides.innerHTML = sliderList;
box.innerHTML = accordionStructure;
productList.innerHTML = productListElem;
contentDiv.innerHTML = contentBlocks;

let checkEvent = 0;

const elementsInCart = document.createElement('div')
elementsInCart.className = 'elements-in-cart';
elementsInCart.style = 'display: none'
document.body.prepend(elementsInCart);

const container = document.createElement('div');
container.className = 'element-container';
container.style = 'display: none';
document.body.prepend(container);

const elementsInCartBlock = document.createElement('div');
elementsInCartBlock.className = 'elements-in-cart-block';
elementsInCartBlock.innerHTML = '<h2 class = "element-in-cart-block__title">Nothing in the cart</h2>';
container.append(elementsInCartBlock);

const closeCartBtn = document.createElement('button');
closeCartBtn.className = 'close-cart-btn';
closeCartBtn.innerHTML = '<i class = "fa-solid fa-x"></i>'
closeCartBtn.onclick = function() {
    document.body.removeAttribute('style');
    elementsInCart.style = 'display: none'
    container.style = 'display: none'
}
container.prepend(closeCartBtn);

const btn = document.querySelectorAll('.paragpaph-block__button');
const accordionButton = document.querySelectorAll('.accordion-button');
const accordionBlock = document.querySelectorAll('.accordion-block');
const hiddenContent = document.querySelectorAll('.paragraph-block__text_hidden');
const slides = document.querySelectorAll('.slide');

dots.innerHTML = dotsPerElem(slides);

const allDots = document.querySelectorAll('.dots__button');

let btnIndex = 0;

initActiveElem(slides[0]);
initActiveElem(allDots[0]);


allDots.forEach(function(item, dotIndex) {
    item.onclick = function() {
        allDots.forEach(function(classDots){
            classDots.classList.remove('dots__button_active')
        })

        allDots[dotIndex].classList.add('dots__button_active');

        slides.forEach(function(classDots){
            classDots.classList.remove('slide_active')
        })

        slides[dotIndex].classList.add('slide_active');

        btnIndex = dotIndex;
    }
});

btnNext.onclick = function() {
    slides[btnIndex].classList.remove('slide_active');
    allDots[btnIndex].classList.remove('dots__button_active');
    
    btnIndex = (btnIndex + 1) % slides.length;

    slides[btnIndex].classList.add('slide_active');
    allDots[btnIndex].classList.add('dots__button_active');
};

btnPrev.onclick = function() {
    slides[btnIndex].classList.remove('slide_active');
    allDots[btnIndex].classList.remove('dots__button_active');

    btnIndex = (btnIndex - 1 + slides.length) % slides.length;

    slides[btnIndex].classList.add('slide_active');
    allDots[btnIndex].classList.add('dots__button_active');
};

accordionButton.forEach(function(item, index) {

    item.onclick = function() {
        if (item.className.includes('accordion-button_active')) {

            item.classList.remove('accordion-button_active');
            item.innerHTML = '<i class="fa-solid fa-plus"></i>';
            accordionBlock[index].classList.remove('accordion-block_visible');

            return;
        }

        accordionBlock.forEach(function (el) {
            el.classList.remove('accordion-block_visible');
        })

        accordionButton.forEach(function(btn) {
            btn.classList.remove('accordion-button_active');
            btn.innerHTML = '<i class="fa-solid fa-plus"></i>'
        })


        item.innerHTML = '<i class="fa-solid fa-minus"></i>';
        accordionBlock[index].classList.add('accordion-block_visible');
        item.classList.add('accordion-button_active')
    }
});

showContent.onclick = function() {
    if (showContent.innerHTML === 'show posts') {
        showContent.innerHTML = 'hide posts';
        contentDiv.className = 'content content__visible';
    } else {
        showContent.innerHTML = 'show posts';
        contentDiv.className = 'content';
    }
};

btn.forEach(function(item, index) {
    let elemIsHidden = true;
    item.onclick = function() {
        if (elemIsHidden) {
            item.innerHTML = 'hide';
            hiddenContent[index].className = 'paragraph-block__text_visible';
        } else {
            item.innerHTML = 'read more';
            hiddenContent[index].className = 'paragraph-block__text_hidden';
        }
        elemIsHidden = !elemIsHidden;
    }
});

const stars = document.querySelectorAll('.stars');

function initActiveElem(el) {
    return el.classList.add(`${el.className}_active`);
};

function dotsPerElem(elem) {
    let result = '';
    for (let i = 0; i < elem.length; i++) {
        const block = `<button class = "dots__button"></button>`
        result += block;
    }

    return result;
};


for (let star of stars) {
    let totalData = '';
    for (let i = 0; i < 5; i++) {
        const el = `<span class = "stars__elem"><i class="fa-solid fa-star"></i></span>`;
        totalData += el;
    }
    star.innerHTML = totalData;
};

let productInCart = 0;

const cartBtn = document.querySelectorAll('.product-info__order');

const spanInCartBtn = document.createElement('span');

cartBtnDetails.append(spanInCartBtn);

cartBtnDetails.onclick = function() {
    window.scrollTo(0, 0);
    elementsInCart.style = 'display: block';
    container.style = 'display: flex';
    document.body.style = 'overflow-y: hidden'

    if (checkEvent !== 0) {
        const cartTitle = document.querySelector('.element-in-cart-block__title');
        if(cartTitle) {
            cartTitle.remove();
        }
    }

    if (productInCart == 0) {
        elementsInCartBlock.innerHTML = '<h2 class = "element-in-cart-block__title">Nothing in the cart</h2>';
    }

    elementsInCart.onclick = function() {
        document.body.removeAttribute('style');
        elementsInCart.style = 'display: none'
        container.style = 'display: none'
    }
}


cartBtn.forEach(function(btn, index) {
    let elementInListCheck = false;

    btn.onclick = function() {
        if (elementInListCheck) {
            alert('you already add this product to the cart');
            return;
        }

        elementInListCheck = true;

        checkEvent++;
        productInCart++;

        spanInCartBtn.innerHTML = productInCart;

        const elementsInCartBlock = document.querySelector('.elements-in-cart-block')

        const selectedProducts = document.createElement('div');
        selectedProducts.className = "product-element";
        selectedProducts.innerHTML = `
            <div class = "product-content">
                <div class = "product-img">
                    <img class = "product-img__picture" src = ${products[index].src} alt = ${products[index].alt}>
                </div>
                <a class = "product-element__link" href = ${products[index].href}>
                    ${products[index].title}
                </a>
            </div>

            <div class = "total-elements">
                <button class = "total-elements__btn total-elements__btn_remove">
                    <i class = "fa-solid fa-minus"></i>
                </button>
                <span class = "total-elements__current-value">1</span>
                <button class = "total-elements__btn total-elements__btn_add">
                    <i class = "fa-solid fa-plus"></i>
                </button>
            </div>

            <div class = "total-price">
                ${products[index].currentPrice} 
            </div>
            <button class = "remove-element">remove from cart</button>
        `;
        elementsInCartBlock.appendChild(selectedProducts);

        const removeProductBtn = selectedProducts.querySelector('.total-elements__btn_remove');
        const addProductBtn = selectedProducts.querySelector('.total-elements__btn_add');
        const removeProductFromCartBtn = selectedProducts.querySelector('.remove-element')
        const el = selectedProducts.querySelector('.total-elements__current-value');
        const totalPrice = selectedProducts.querySelector('.total-price');

        let countElementSeclected = 1;
        let result = 0;

        removeProductBtn.onclick = function() {
            if (countElementSeclected < 2) {
                alert('should be a minimum 1 product');
                countElementSeclected = 1;
                return;
            }
            countElementSeclected--;
            productInCart--;

            el.innerHTML = countElementSeclected;
            spanInCartBtn.innerHTML = productInCart;
            const newNum = strToNum(products[index].currentPrice)
            result = newNum * Number(el.innerHTML);
            totalPrice.innerHTML = numToStr(result);
            result = 0;
        }

        addProductBtn.onclick = function() {
            if (countElementSeclected > 9) {
                alert('You have reached the limit. Max is 10');
                countElementSeclected = 10;
                return;
            }
            countElementSeclected++;
            productInCart++;

            el.innerHTML = countElementSeclected;
            spanInCartBtn.innerHTML = productInCart;
            const newNum = strToNum(products[index].currentPrice)
            result = newNum * Number(el.innerHTML)
            totalPrice.innerHTML = numToStr(result);
            result = 0;
        }

        removeProductFromCartBtn.onclick = function() {
            productInCart = Math.abs(productInCart - countElementSeclected);
            if (productInCart == 0) {
                spanInCartBtn.innerHTML = ''
                elementsInCartBlock.innerHTML = '<h2 class = "element-in-cart-block__title">Nothing in the cart</h2>';
            } else {
                spanInCartBtn.innerHTML = productInCart;
            }
            selectedProducts.remove();
            elementInListCheck = !elementInListCheck;
        }
    }
})


const contentFromUser = document.createElement('div');
contentFromUser.className = "users-content";
document.body.append(contentFromUser);

const buttonsDiv = document.createElement('div');
buttonsDiv.className = "users-content-buttons";
contentFromUser.append(buttonsDiv);

const userContentDiv = document.createElement('div');
userContentDiv.className = "users-content-box";
contentFromUser.append(userContentDiv);

let count = 1;

addButtons();

function unactiveAll(currentEl) {
    const newEl = document.querySelectorAll('.users-content-element');

    newEl.forEach(function(item) {
        if (item !== currentEl) {
            item.classList.remove('users-content-element_active')
        }
    })
}

function addButtons() {
    btnAttributes.forEach(function({className, innerHtml, onClick }) {
        const button = document.createElement('button');
        button.className = className;
        button.innerHTML = innerHtml;
        button.addEventListener('click', onClick);

        buttonsDiv.append(button)
    })
}
const addBtn = document.querySelector('.content-button_add');
const removeBtn = document.querySelector('.content-button_remove');
const cloneBeforeBtn = document.querySelector('.content-button_clone-before');
const cloneAfterBtn = document.querySelector('.content-button_clone-before')

addBtn.onclick = function() {
    addBtn.onclick = btnAttributes.onClick;
}

removeBtn.onclick = function() {
    removeBtn.onclick = btnAttributes.onClick
}

cloneBeforeBtn.onclick = function() {
    cloneBeforeBtn.onclick = btnAttributes.onClick
}

cloneAfterBtn.onclick = function() {
    cloneAfterBtn.onclick = btnAttributes.onClick
}

function strToNum(str) {
    let newStr = str.replaceAll(' ', '');

    return Number(newStr);
}

function numToStr(num) {
    let newNum = num.toString();

    let result = '';
    for (let i = newNum.length - 1; i >= 0; i--) {
        if ((newNum.length - i) % 3 == 0) {
            result += newNum[i] + ' ';
        } else {
            result += newNum[i];
        }
    }

    return result.split('').reverse().join('');
}