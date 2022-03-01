<?php
    header ('Content-type: text/html; charset=UTF-8');
    require_once("Sql.php");

    switch ($_POST["comando"]) {
        case 'listagem':
            $sql = new Sql();
            $query = "SELECT * FROM expressions;";
            $dados = $sql->select($query);
        break;
        case 'inserir':
            $sql = new Sql();
            $query = "INSERT INTO expressions(materia, color, tema, idioma, texto, user) VALUES ('".addslashes($_POST["materia"])."', '".addslashes($_POST["cor"])."', '".addslashes($_POST["tema"])."', '".addslashes($_POST["idioma"])."', '".$_POST["texto"]."', '".addslashes($_POST["user"])."')";
            $dados = $sql->query($query);
        break;
        default:
            # code...
        break;
    }
    
    echo json_encode($query);
?>