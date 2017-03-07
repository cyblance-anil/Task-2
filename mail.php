<?php
	//error_reporting(0);

	if(isset($_POST))
	{ 
		//print_r($_POST);
		if($_POST['name']=='' || $_POST['email']==''){
			echo '<div style="color: red; font-size: 18px;margin-bottom: 10px;">Please fill all required fields.</div>'; exit;
	   	}else if(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$_POST['email'])){
			echo '<div style="color: red; font-size: 18px;margin-bottom: 10px;">Please enter a valid email address.</div>'; exit;
	   	}else{ 
			
			//print_r($_POST);exit;
			$str='<table width="100%" border="0">
				<tr>
					<td width="30%">Name:</td>
					<td width="70%">'.$_POST['name'].'</td>
				</tr>
				<tr>
					<td>Email:</td>
					<td>'.$_POST['email'].'</td>
				</tr>';	               
				if($_POST['message']!=""){
					$message = nl2br($_POST['message']);
                	$str.='<tr>
						<td>Why are you interested in owning a Signal 88?:</td>
						<td>'.$message.'</td>
					</tr>';
				}
			$str.='</table>';		
			//echo $str; exit;
				
           	$to = 'info@cyblance.com';
			$subject = 'Greek Label Inquiry';
			
			$message = $str;
			$headers  = "MIME-Version: 1.0\r\n";
			$headers .= "Content-type:text/html;charset=iso-8859-1\r\n";
			$headers .= 'From: '.$_POST['name'].' <'.$_POST['email'].'>' . "\r\n";
			
			if(mail($to, $subject, $message, $headers)){
				echo 1; exit;
			}else{
				echo '<div style="color: red; font-size: 18px;font-family: brandon_grotesque_regularRg;">Error in sending mail. Contact your hosting provider.</div>'; exit;
			}
		}
	}

	
	
?>