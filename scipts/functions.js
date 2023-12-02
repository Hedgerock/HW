function contentForm(parentEl) {
    const myForm = document.createElement('form');

    myForm.setAttribute('action', '#');
    myForm.setAttribute('name', 'myForm');
    myForm.className = 'form';

    parentEl.append(myForm);
}

function initRadioBtns() {
    const myForm = document.forms.myForm;

    content.forEach(function(item, index) {
        const boxLabel = document.createElement('div');
        const radioLabel = document.createElement('label');
        const radioEl = document.createElement('input');
        
        boxLabel.className = 'box-label';

        radioLabel.textContent = item.radioValue;
        radioLabel.setAttribute('name', 'labelContent');
        
        radioEl.setAttribute('type', 'radio');
        radioEl.setAttribute('name', 'products');
        radioEl.setAttribute('value', item.radioValue);

        radioEl.addEventListener('change', function() {
            const oldSelect = document.querySelector('.select');
            if (oldSelect) {
                oldSelect.remove();
            }

            const fieldSet = document.forms.myForm.fieldset;

            if (fieldSet) {
                fieldSet.remove();
            }

            initSelectOptions(content, boxLabel, index);
            initCheckBox(content, boxLabel, '', index);

            const modelEl = document.forms.myForm.fieldset.elements;
            objectLoopValidation(modelEl);
        });
        
        myForm.append(boxLabel);
        boxLabel.append(radioLabel);
        radioLabel.append(radioEl);
    })
}

function initSendFormBtn() {
    const myForm = document.forms.myForm;
    const formBtn = document.createElement('button');
    formBtn.className = 'form-btn';
    formBtn.setAttribute('type', 'submit');
    formBtn.setAttribute('disabled', '');
    formBtn.textContent = 'create form';

    myForm.append(formBtn);
}

function initSelectOptions(obj, parentEl, index) {
    const selectBlock = document.createElement('select');

    selectBlock.className = 'select';
    selectBlock.setAttribute('name', 'selection');

    parentEl.append(selectBlock);

    selectBlock.addEventListener('change', function() {
        const oldBoxes = document.querySelectorAll('.box');

        const fieldSet = document.forms.myForm.fieldset;

        if (fieldSet) {
            fieldSet.remove();
        }

        oldBoxes.forEach(function(box) {
            box.remove();
        });

        initCheckBox(obj, parentEl, selectBlock, index);

        const modelEl = document.forms.myForm.fieldset.elements;
        objectLoopValidation(modelEl);
    });

    initOption(obj, selectBlock, index);
}


function initOption(obj, parentEl, index) {
    obj[index].selectOptions.forEach(function(item) {
        const newSelect = new Option(item.type);
        parentEl.append(newSelect);
    })
}

function initCheckBox(obj, parentEl, selectEl, index) {
    const fieldSet = document.createElement('fieldset');

    let selectedIndex;
    if (selectEl) {
        selectedIndex = selectEl.selectedIndex;
    } else {
        selectedIndex = 0;
    }

    fieldSet.setAttribute('name', 'fieldset');

    obj[index].selectOptions[selectedIndex].model.forEach(function(item, ind) {
        const box = document.createElement('div');
        const checkBox = document.createElement('input');

        box.className ='box';
        const textValue = obj[index].selectOptions[selectedIndex].model[ind];
        box.textContent = textValue;

        checkBox.className = 'checkbox';
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', 'checkBox');
        checkBox.setAttribute('value', textValue);
    
        btn.removeAttribute('disabled');

        parentEl.append(fieldSet);
        fieldSet.append(box);
        box.append(checkBox);

        const modelEl = document.forms.myForm.fieldset.elements;
        checkBox.onchange = function() {
            if (this.checked) {
                btn.removeAttribute('disabled');
            } else {
                objectLoopValidation(modelEl);
            }
        }
    })
}

function initFinalForm() {
    const windowEl = document.createElement('div');
    const title = document.createElement('h1');
    const category = document.createElement('h2');
    const type = document.createElement('h3');
    const models = document.createElement('ul');
    
    const modelEl = document.forms.myForm.fieldset.elements;

    windowEl.className = 'window';

    title.className = 'window__title';
    title.textContent = 'Form';

    category.className = 'window__category';
    category.textContent = `Category: ${document.forms.myForm.products.value}`;

    type.className = 'window__type';
    type.textContent = `Type: ${document.forms.myForm.selection.value}`

    models.className = 'models';

    document.body.append(windowEl);
    windowEl.append(title, category, type, models);
    objectLoop(modelEl, models);
}


function objectLoop(elems, parent) {
    const btn = document.querySelector('.form-btn')
    let count = 1;

    for(let el of elems) {
        if (el.checked) {
            const contentValue = document.createElement('li');
            contentValue.className = 'models__element';
            contentValue.textContent = `${count}. ${el.value}`;
            parent.append(contentValue);
            count++;
            continue;
        }
    }
}

function objectLoopValidation(elems) {
    let boolean = true;
    const btn = document.querySelector('.form-btn')

    for(let el of elems) {
        if (el.checked) {
            boolean = false;
            break;
        }
    }

    if (boolean) {
        btn.setAttribute('disabled', '');
    } else {
        btn.removeAttribute('disabled');
    }
}

