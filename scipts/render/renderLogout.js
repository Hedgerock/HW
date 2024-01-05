export const renderLogout = (authorizationParts) => {
    const parent = document.querySelector('.header');

    const logout = authorizationParts.logout;

    parent.insertAdjacentHTML('beforeend', logout);
}