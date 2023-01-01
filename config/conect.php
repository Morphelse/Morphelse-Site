

<?php

    $Conexao = mysqli_connect('localhost','root', 'pass123', 'morphelse');
    mysqli_set_charset($Conexao, "utf8");
    mb_internal_encoding("UTF-8");
    mb_http_output("UTF-8");
    header("Content-Type: text/html; charset=UTF-8", true);
    

?>