<?php
    switch($_REQUEST['ac']){
        case 'contato':
            echo $_REQUEST['name'];
            echo $_REQUEST['email'];
            echo $_REQUEST['telefone'];
            echo $_REQUEST['message'];
            break;
        case 'search':
            echo $_REQUEST['q'];
            break;
        default:
            break;
    }