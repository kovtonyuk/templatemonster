<?
if (isset($_POST['submit'])) { //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 's.kovtonyuk@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $first_name = $_POST['name'];
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Email: ' . $_POST['email'] . '</p>                        
                        <p>Сообщение: ' . $_POST['message'] . '</p>                        
                    </body>
                </html>'; //Текст нашего сообщения можно использовать HTML теги
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From:" . $_POST['email']; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>