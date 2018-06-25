// Валидация формы
(function () {
    var me = {};

    /*------------ Проверка правильности написания email ------------*/
     me.isEmail =function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /*------------ Проверка правильности написания номера ------------*/
    /*me.isNumber =function (number) {
        var re = /^\d+$/;
        return re.test(number);
    }*/

    /*------------ Проверка пустоты полей ------------*/
    me.isNotEmpty =function (str) {
        return Boolean(str);
    }

    SK.validation = me;
}());