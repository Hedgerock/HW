import { renderMenu } from "./render/renderMenu.js";
import { menuConfig } from "./configs/menuConfig.js";
import { menuParts } from "./parts/menuParts.js";
import { renderLogin } from "./render/renderLogin.js";
import { authorizationParts } from "./parts/authorizationParts.js";
import { renderCartContent } from "./render/renderCart.js";
import { authorizationField } from "./authorization/authorizationField.js";

renderMenu(menuConfig, menuParts);
renderLogin(authorizationParts);

const loginBtn = document.querySelector('.authorization-process_login')
loginBtn.onclick = function(e) {
    e.preventDefault();
    authorizationField();
}

const cartBtn = document.querySelector('.cart-button');
cartBtn.onclick = renderCartContent;