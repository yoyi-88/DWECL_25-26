<?php
    // Para solicitudes de otros dominios.
    header("access-control-allow-origin: *");
    //...................................... 
    $base = new mysqli('localhost', 'root', '', 'tema9');


    if ($_GET['id']!="") {
        $sql = 'SELECT * FROM tema9.datos WHERE id=?';

        $stmt = $base->prepare($sql);

        $stmt->bind_param(
            'i', 
            $_GET['id']
        );

        $stmt->execute();

        $resultado = $stmt->get_result();

        $datos = $resultado->fetch_assoc();
        
    } else {
        $sql = 'SELECT id, nombre FROM tema9.datos';

        $result = $base->query($sql);

        $datos = $result->fetch_all(MYSQLI_ASSOC);
        
    }

    $base->close();

    echo json_encode($datos);
?>