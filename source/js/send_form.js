$(document).ready(function(){
    $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собираем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php файла отправителя
            data: form_data,
            success: function () {
                //код в этом блоке выполняется при успешной отправке сообщения
                alert("Ваше сообщение отпрвлено!");
                window.location.href = "http://4893v1qa.idua.org/"
            }
        });
    });
});