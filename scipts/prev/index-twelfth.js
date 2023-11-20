const userForm = document.forms.userForm;
const btn = userForm.sendBtn;
const fields = userForm.fields.elements;
const windowEl = document.querySelector('.window');

const isValid = {
    name: false,
    age: false,
};

inputsTypingValidation(fields, isValid);


userForm.onsubmit = function(event) {
    event.preventDefault();

    const arrValidator = objectValuesToArr(isValid);

    if (arrValidator.includes(false)) {
        windowEl.textContent = 'Form is not ready for submit';
    } else {
        windowEl.textContent = 'Form submited :)';
    }
}

function inputsTypingValidation(inputs, obj) {
    for (let field of inputs) {
        field.oninput = function() {
            const value = this.value;
            const fieldName = field.name;

            if (value.trim().length >= 8) {
                field.parentElement.removeAttribute('class');
                field.parentElement.removeAttribute('data-info');
                obj[fieldName] = true;
            } else {
                field.parentElement.className="error";
                field.parentElement.setAttribute('data-info', `For [${fieldName}] should be a minimum 8 characters`);
                obj[fieldName] = false;
            }
            updateButtonStyle(obj, btn);
        }
    }
}

function updateButtonStyle(obj, button) {
    const arrVal = objectValuesToArr(obj);
    if (!arrVal.includes(false)) {
        button.classList.add('valid');
    } else {
        button.removeAttribute('class');
    }
}

function objectValuesToArr(obj) {
    return Object.values(obj);
}


//Solution in classroom
/* for (let i = 0; i < fields.length; i++) {
    fields[i].oninput = function() {
        const value = this.value;
        const fieldName = fields[i].name;
        if (value.length >= 5) {
            console.log(`${fieldName} is valid`);
        } else {
            console.log(`${fieldName} is not valid`);
            isValid[fieldName] = true;
        }
    }
} */