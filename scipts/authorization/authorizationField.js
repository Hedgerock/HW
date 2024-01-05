import { loginData } from "../data/loginData.js";
import { passwordData } from "../data/passwordData.js";
import { removeDomComponents } from "../render/renderSingleProduct.js";

export function authorizationField() {
    const form = document.createElement('div');
    const authorizationBox = document.createElement('form');
    const layout = document.createElement('div');
    const labelLogin = document.createElement('label');
    const inputLogin = document.createElement('input');
    const labelPassword = document.createElement('label');
    const inputPassword = document.createElement('input');
    const enterBtn = document.createElement('button');
    const closeBtn = document.createElement('button');

    authorizationBox.className = 'authorization-box';
    form.className = 'authorization-form';

    layout.className = 'authorization-layout';
    layout.onclick = function() {
        removeDomComponents(layout, authorizationBox);
        body.removeAttribute('style');
    }

    closeBtn.className = 'product-description__close-btn product-description__close-btn_cart';
    closeBtn.textContent = 'close';
    closeBtn.onclick = function() {
        removeDomComponents(layout, authorizationBox);
        body.removeAttribute('style');
    }

    const body = document.body;

    authorizationBox.append(form);

    labelLogin.textContent = 'Login:';
    labelLogin.append(inputLogin);

    inputPassword.setAttribute('type', 'password');

    labelPassword.textContent = 'Password:';
    labelPassword.append(inputPassword);

    enterBtn.className = 'enter-btn'
    enterBtn.textContent = 'Enter';
    enterBtn.onclick = function(e) {
        e.preventDefault();

        const loginBtn = document.querySelector('.authorization-process_login')
        const userLogin = inputLogin.value === loginData.login
        const userPassword = inputPassword.value === passwordData.password
        const url = loginBtn.href;

        if (userLogin && userPassword) {
            window.location.href = url
        } else {
            alert('wrong');
        }
    }

    body.append(authorizationBox, layout);
    form.append(labelLogin, labelPassword, enterBtn, closeBtn)
}