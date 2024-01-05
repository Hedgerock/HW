import { products } from "./data/products.js";
import { renderProduct } from "./render/renderProduct.js";
import { createProductEl } from "./render/renderSingleProduct.js";

products.forEach(item => {renderProduct('.products', item)}) 

imgInit();

export function imgInit() {
    const images = document.querySelectorAll('.product__img');

    images.forEach(image => {
        image.onclick = function() {
            const parent = this.closest('.product');
            const id = parent.dataset.id;
            const element = products.find(product => product.id == id);

            if (!element) {
                return
            }

            createProductEl(element);
        }
    });
}

export function setMaxId() {
    const arrId = products.map(item => item.id);
    const maxId = Math.max.apply(null, arrId);

    const id = JSON.stringify(maxId);
    localStorage.setItem('productId', id);

    return maxId;
}
