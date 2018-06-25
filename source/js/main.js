/*------------ Открытие формы по нажатии кнопки ------------*/
(function () {
    var openFormButton = document.querySelector('.arrow-down');

    if(openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            SK.form.open();
        })
    }
}());