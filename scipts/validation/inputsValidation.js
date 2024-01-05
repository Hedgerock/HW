export function inputsValidation() {
    const fieldsetEls = document.forms.form.fieldset.elements;
    let isValid = true;

    for (let field of fieldsetEls) {
        if (field.type === 'file') {
            continue;
        }
        const fieldValue = field.value;

        field.oninput = function() {
            const value = this.value;
            value.trim().length < 2 ? field.style.background = 'red' : field.removeAttribute('style');
        }

        fieldValue.trim().length < 2 ? isValid = false : isValid = true;
    }

    return isValid;
}
