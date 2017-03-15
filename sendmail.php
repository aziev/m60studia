<?php
	if(isset($_POST['phone']) && isset($_POST['name']))
	{
		$phone = $_POST['phone'];
		$name = $_POST['name'];
		
		$subject = 'Заказ на звонок';
		$message = "Номер: $phone. Имя: $name";
	}else{
		if(isset($_POST['visitor-name']) && isset($_POST['email']) && isset($_POST['message']))
		{
			$email = $_POST['email'];
			$name = $_POST['visitor-name'];
			$message = $_POST['message'];
		
			$subject = 'Заявка';
			$message = "Имя: $name. Почта: $email. Сообщение: $message";
		}else
			header("Location: index.html");
	}
	$to = 'morev1589@gmail.com';
	

	mail($to, $subject, $message,"Content-type:text/plain; charset = utf8");
	
	header("Location: index.html");
?>