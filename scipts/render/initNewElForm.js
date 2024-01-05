import { inputsValidation } from "../validation/inputsValidation.js";
import { renderNewEl } from "./renderNewElForm.js";

export function initnewElForm (parent, btn) {
    const form = document.createElement('form');
    const fieldset = document.createElement('fieldset');
    const prePictureBox = document.createElement('div');
    const prePicture = document.createElement('img');
    const productTitle = document.createElement('input');
    const productPicture = document.createElement('input');
    const productDescription = document.createElement('textarea');
    const productDescriptionFull = document.createElement('textarea');
    const productPrice = document.createElement('input');
    const buttons = document.createElement('div');
    const confirmBtn = document.createElement('button');
    const declineBtn = document.createElement('button');

    form.className = 'product-form';
    form.setAttribute('name', 'form');
    form.setAttribute('action', '#');

    fieldset.className = 'product-fieldset';
    fieldset.setAttribute('name', 'fieldset');

    prePictureBox.className = 'prePicture-box';
    prePicture.className = 'prePicture-box__img';
    prePicture.setAttribute('src', './img/noImg.jpg');
    prePicture.setAttribute('alt', '');
    prePictureBox.append(prePicture);

    productTitle.setAttribute('type', 'text');
    productTitle.setAttribute('name', 'productTitle');
    productTitle.setAttribute('placeholder', 'title');

    productPicture.setAttribute('type', 'file');
    productPicture.setAttribute('name', 'productPicture')

    productDescription.setAttribute('type', 'text');
    productDescription.setAttribute('name', 'productDescription');
    productDescription.setAttribute('placeholder', 'miniDescription');

    productDescriptionFull.setAttribute('type', 'text');
    productDescriptionFull.setAttribute('name', 'productDescriptionFull');
    productDescriptionFull.setAttribute('placeholder', 'fullDescription');

    productPrice.setAttribute('type', 'number');
    productPrice.setAttribute('name', 'productPrice');
    productPrice.setAttribute('placeholder', 'price');

    buttons.className = 'buttons-box';

    confirmBtn.textContent = 'confirm';
    confirmBtn.className = 'product-form__btn';

    declineBtn.textContent = 'cancel';
    declineBtn.className = 'product-form__btn';
    declineBtn.onclick = function(e) {
        e.preventDefault();

        form.remove();
        btn.removeAttribute('style');
    }
    parent.append(form);
    form.append(fieldset, buttons);
    fieldset.append(prePictureBox, productPicture, productTitle, productDescription, productDescriptionFull, productPrice);
    buttons.append(confirmBtn, declineBtn);
    const fieldsetElements = Array.from(fieldset.elements);

    fieldsetElements.forEach(element => {
        element.className = "product-fieldset__insert-info";
    })

    confirmBtn.onclick = function(e) {
        e.preventDefault();
        const check = inputsValidation();
        console.log(check);

        if (!check) {
            alert('some inputs are less than 2 characters or no picture');
            return;
        }

        renderNewEl(fieldset);
        form.remove();
        btn.removeAttribute('style');
    }
}