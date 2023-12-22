import { addToCartProducts, renderBtn } from "./cartUtils/cartUtils.js";

export const createProductEl = (element) => {
    const body = document.body;

    const elementBlock = document.createElement('div');
    const elementLayout = document.createElement('div');
    const elementContainer = document.createElement('div');
    const elementBlockTitle = document.createElement('h3');
    const closeBtn = document.createElement('button');
    const elementBlockImage = document.createElement('div');
    const elementBlockPicture = document.createElement('img');
    const elementPriceBlock = document.createElement('div');
    const elementPrice = document.createElement('span');
    const elementBtn = document.createElement('button');
    const elementFullDescription = document.createElement('p');

    elementBlock.className = 'product product-description';
    elementBlock.setAttribute('data-id', element.id);

    elementLayout.className = 'product-layout';
    elementLayout.onclick = function() {
        removeDomComponents (elementBlock, elementLayout);
        body.removeAttribute('style');
    }

    elementContainer.className = 'product-container';

    elementBlockTitle.className = 'product-description__title';
    elementBlockTitle.textContent = element.title;

    closeBtn.className = 'product-description__close-btn';
    closeBtn.textContent = 'close';
    closeBtn.onclick = function() {
        removeDomComponents (elementBlock, elementLayout);
        body.removeAttribute('style');
    }

    elementBlockImage.className = 'product-image';

    elementBlockPicture.className = 'product-image__picture';

    const img = element.img ? element.img : 'noImg.jpg';

    elementBlockPicture.setAttribute('src', `./img/${img}`);
    elementBlockPicture.setAttribute('alt', '');

    elementPriceBlock.className = 'product__price-block product__price-block_edited';

    elementPrice.className = 'product__price product__price_edited';
    elementPrice.textContent = element.price;

    elementBtn.className = 'product__add-to-cart';
    elementBtn.textContent = 'Add To Cart';
    elementBtn.onclick = addToCartProducts;
    
    elementFullDescription.className = 'product-description__paragraph';
    elementFullDescription.textContent = element.descriptionMax;

    body.append(elementBlock, elementLayout);
    body.style.overflow = 'hidden';

    elementBlock.append(elementContainer);
    elementContainer.append(elementBlockTitle, closeBtn, elementBlockImage, elementPriceBlock, elementFullDescription);
    elementBlockImage.append(elementBlockPicture);
    elementPriceBlock.append(elementPrice, elementBtn);

    window.scrollTo(0, 0);
    renderBtn();
}


export function removeDomComponents () {
    const arr = [...arguments];
    arr.forEach(component => {component.remove()});
}