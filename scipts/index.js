const container = document.querySelector('.container');

contentForm(container);

initRadioBtns();

initSendFormBtn();

const btn = document.querySelector('.form-btn');

btn.onclick = function(e) {
    e.preventDefault();

    initFinalForm();
}