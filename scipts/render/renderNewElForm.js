import { products } from "../data/products.js";
import { imgInit, setMaxId } from "../sameParts.js";
import { checkboxCheck, initCheckbox } from "./domManipulations/checkboxFunctions.js";
import { renderProduct } from "./renderProduct.js";

let maxId = JSON.parse(localStorage.getItem('productId')) || setMaxId();

export function renderNewEl(fieldset) {
    const elements = fieldset.elements;
    const productPicture = elements.productPicture;
    const reader = new FileReader();

    reader.onloadend = function() {
        const urlToString = reader.result;
        const imageUrl = urlToString;
        const productTitle = elements.productTitle.value;
        const productDescription = elements.productDescription.value;
        const productDescriptionFull = elements.productDescriptionFull.value;
        const productPrice = Number(elements.productPrice.value)

        setMaxId();
        const id = ++maxId;

        const newData = {
            id: id,
            price: productPrice,
            img: imageUrl,
            title: productTitle,
            descriptionMini: productDescription,
            descriptionMax: productDescriptionFull,
        }

        products.push(newData);
        renderProduct('.products', newData);
        imgInit();
        initCheckbox();
        checkboxCheck();
        const currentProducts = JSON.stringify(products);
        localStorage.setItem('data', currentProducts);
    }
    if (productPicture.files[0]) {
        reader.readAsDataURL(productPicture.files[0]);
    }
}