export function initCheckbox() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const checkbox = document.createElement('input');
        checkbox.className = 'checkbox-product';
        checkbox.setAttribute('type', 'checkbox');
    
        if (!product.className.includes('product_new')) {
            product.insertAdjacentElement('beforeend', checkbox);
        }
    })
}


export function checkboxCheck() {
    const checkbox = document.querySelectorAll('.checkbox-product');
    const delElBtn = document.querySelector('.deleteElBtn')

    checkbox.forEach(item => {
        const parent = item.parentElement;

        item.onchange = function() {
            console.log(parent);
            item.checked ? parent.classList.add('product_checked') : parent.classList.remove('product_checked');
            
            let isChecked = Array.from(checkbox).some(checkbox => checkbox.checked);
            
            isChecked ? delElBtn.removeAttribute('disabled') : delElBtn.setAttribute('disabled', '');
        }
    })
}