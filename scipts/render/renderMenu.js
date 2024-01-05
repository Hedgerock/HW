export const renderMenu = (config, parts) => {
    const parent = document.querySelector('.header');

    const menuContent = config.mainParts.reduce((acc, item) => acc + parts[item], '')
    const menuEl = `<ul class = "menu">${menuContent}</ul>`
    parent.insertAdjacentHTML('afterbegin', menuEl);
}