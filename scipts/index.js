const selectValues = document.forms.selectValues;
const select = selectValues.selectTag;
const selectInput = selectValues.newOption;
const selectBtn = selectValues.submitBtn;

const tagForm = document.forms.tagSpecification;
const tagFieldSet = tagForm.fields.elements;
const tagBtn = tagForm.initDomEl;

selectBtn.onclick = function() {
    initNewSelectEl(selectValues, selectInput, select);
}

tagBtn.onclick = function() {
    initDomEL();
}

function initNewSelectEl(form ,input, select) {
    let inputValue = input.value;
    const booleanValue = sameTagsValidation(inputValue);
    const field = form.selectFields;

    if(inputValue.trim().length === 0 || !isNaN(inputValue)) {
        field.className = "error";
        field.setAttribute('data-info', `input is empty or has unacceptable value`)
        return
    } else if (inputValue.trim().length >= 20) {
        field.className = "error";
        field.setAttribute('data-info', `input is more than 20 characters`)
        return;
    } else if (!booleanValue) {
        field.className = "error";
        field.setAttribute('data-info', `input has already been added`);
        return;
    }
    const newSelect = new Option(inputValue.toLowerCase(), inputValue.toLowerCase());
    
    select.append(newSelect);
    field.removeAttribute('class');
    field.removeAttribute('data-info');
    input.value = '';
}

function initDomEL() {
    const parentEl = document.querySelector('.window');
    const options = select.options;
    const index = select.selectedIndex;
    const el = document.createElement(options[index].label);
    const title = document.createElement('h4');
    const content = document.createElement('p');

    if (tagFieldSet.tagClass.value.trim().length > 0) {
        el.className = `new-element new-element_${tagFieldSet.tagClass.value}`;
    } else {
        el.className = 'new-element';
    }

    content.className = 'new-element__content';
    content.textContent = tagFieldSet.contentValue.value;

    title.className = 'new-element__title';
    title.textContent = options[index].label

    parentEl.append(el);
    el.append(title, content);

    tagFieldSet.tagClass.value = '';
    tagFieldSet.contentValue.value = '';
}


function sameTagsValidation(value) {
    const options = select.options;
    let check = true;

    for (let i = 0; i < options.length; i++) {
        if (options[i].label == value.trim().toLowerCase()) {
            check = false;
            break;
        }
    }

    return check;
}