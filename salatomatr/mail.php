<?php
  var_dump($_POST) ;
  require_once('plugins/PHPMailer-master/src/PHPMailer.php');
  require_once('plugins/PHPMailer-master/src/Exception.php');

  $mail = new PHPMailer;
  $mail->CharSet = 'utf-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->setFrom('IvanGalant', 'IvanGalant')
  $mail->addAddress('harisov.talgat@yandex.ru')
  $mail->Subject('Заявка на предзаказ')

  $name = $_POST['name'];
  $phone = $_POST['phone'];

  $body = '<h1>Заявка на предзаказ</h1>'
  $body = '<p>' . $name . '</p>'
  $body = '<p>' . $phone . '</p>'
  $body = '<h1>Заявка на предзаказ</h1>'

  $mail->Body = $body
 
if($mail->send()){
  $message = true
} else{
  $message = false
}

$response = {
  'message' : $message
}

echo json_encode($response)
