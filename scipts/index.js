import { renderProduct } from "./render/renderProduct.js";
import { createProductEl } from "./render/renderSingleProduct.js";
import { products } from "./data/products.js";

products.forEach(item => {renderProduct('.products', item)});

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