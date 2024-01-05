import { menuConfig } from "./configs/menuConfig.js";
import { products } from "./data/products.js";
import { authorizationParts } from "./parts/authorizationParts.js";
import { menuParts } from "./parts/menuParts.js";
import { cartRender, saveCart } from "./render/cartUtils/cartUtils.js";
import { checkboxCheck, initCheckbox } from "./render/domManipulations/checkboxFunctions.js";
import { initPrePicture } from "./render/domManipulations/pictureRender.js";
import { initnewElForm } from "./render/initNewElForm.js";
import { renderAdminMenu } from "./render/renderAdminMenu.js";
import { renderLogout } from "./render/renderLogout.js";
import { cart } from "./render/renderProduct.js";
import { inputsValidation } from "./validation/inputsValidation.js";

renderAdminMenu(menuConfig, menuParts)
renderLogout(authorizationParts);

const btn = document.querySelector('.add-new-productBtn');

btn.onclick = function() {
    const newEl = this.parentElement;
    initnewElForm(newEl, btn);
    inputsValidation();
    btn.style.display = 'none';
    initPrePicture();
}

const delElBtn = document.querySelector('.deleteElBtn');

delElBtn.onclick = function() {
    const checkbox = document.querySelectorAll('.checkbox-product');

    checkbox.forEach(item => {
        const parent = item.parentElement;
        const id = parent.dataset.id;
        const index = products.indexOf(id);

        if (item.checked) {
            parent.remove();
            delete cart[id]
            products.splice(index, 1);
        }
    });

    const currentProducts = JSON.stringify(products);
    localStorage.setItem('data', currentProducts);
    delElBtn.setAttribute('disabled', '');
    console.log(products);
    cartRender();
    saveCart()
}

initCheckbox();
checkboxCheck();