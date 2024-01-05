export const renderLogin = (authorizationParts) => {
    const parent = document.querySelector('.header');

    const login = authorizationParts.login;

    parent.insertAdjacentHTML('beforeend', login);
}