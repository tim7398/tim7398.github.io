<?php
  $fname = $_POST['first_name'];
  $lname = $_POST['last_name'];
  $email = $_POST['email'];
  $comments = $_POST['comments'];

  $to = "tim7398@gmail.com";
  $subject = "From Tim Qin.com"
 

  mail($to,$subject,$comments, "From:". $fname. $lname);

  echo "Message Sent";
?>