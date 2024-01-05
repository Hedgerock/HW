export function initPrePicture() {
    const pictureInput = document.forms.form.fieldset.elements.productPicture
    const prePicture = document.querySelector('.prePicture-box__img')

    pictureInput.onchange = function() {
        const file = this.files[0];
        const reader = new FileReader();

        reader.onloadend = function() {
            prePicture.src = reader.result;
        }

        file ? reader.readAsDataURL(file) : '';
    }
}
