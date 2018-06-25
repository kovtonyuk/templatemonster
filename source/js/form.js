/*------------ Открытие формы ------------*/
(function () {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose() {

        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    /*------------ Открытие формы ------------*/
    me.open = function() {
        // плавность открытия формы
        document.querySelector('.form-container').animate({
            opacity: [ 0, 1 ]
        }, 500);

        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);

    };

    /*------------ Закрытие формы ------------*/
    me.close = function() {
        // Плавность закрытия формы
        var formAnimation = form.animate({
            opacity: [ 1, 0 ]
        }, 300);

        formAnimation.addEventListener('finish', function() {
            form.classList.add('is-hidden');
        });
    };

    /*------------ Закрытияе формы после нажатия кнопки ESC ------------*/
    document.addEventListener('keydown', function(e) {
        var key = e.which || e.keyCode || 0;
        if(key == 27) {
            onClose();
        }
    });

    /*------------ Проверка полей ------------*/
    /*me.isValid = function() {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;

        if (!me.isAllCompleted(requiredFields)) {
            console.log('Заполните обязательные поля');
            return false;
        } else if (!SK.validation.isEmail(emailValue)) {
            console.log('Не верно введен email');
            return false;
        }

        return true;
    };


    me.isAllCompleted = function (data) {
        result = true;

        for (var i = 0; i < data.length; i++) {
            if (!SK.validation.isNotEmpty(data[i].value)) {
                var result = false;
                break;
            }
        }
        return result;
    };*/

    SK.form = me;

}());