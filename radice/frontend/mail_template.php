<?php 
// START MESSAGE
$msgformat= "";
// FIELD LIST
foreach($mail_contents as $content){
	$msgformat.= $content[0].": ".$content[1]."<br/>";
}
// CONTINUE MESSAGE
$msgformat.= "";
// END MESSAGE