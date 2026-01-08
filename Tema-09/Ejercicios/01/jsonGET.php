<?php
header("access-control-allow-origin: *");
header('Content-Type: application/json'); 

// Datos de conexión a la BBDD 
$host = 'localhost';
$user = 'root';
$pass = ''; 
$db_name = 'tema9';

// Inicializar variable de respuesta
$datos = [];

// 2. Intentar conexión y manejar error
$base = new mysqli($host, $user, $pass, $db_name);

if ($base->connect_error) {
    // Si falla la conexión, devolvemos un JSON de error en lugar de HTML
    $datos = [
        'error' => true, 
        'mensaje' => 'Fallo en la conexión a la base de datos: ' . $base->connect_error
    ];
} else {
    // La conexión fue exitosa, procedemos con las consultas

    if (isset($_GET['id']) && $_GET['id'] != "") {
        // Petición de detalles segun id
        $sql = 'SELECT * FROM tema9.datos WHERE id=?';
        $stmt = $base->prepare($sql);

        $stmt->bind_param('i', $_GET['id']);
        $stmt->execute();
        $resultado = $stmt->get_result();
        $datos = $resultado->fetch_assoc();
        $stmt->close();

    } else {
        // Petición inicial de nombres
        
        $sql = 'SELECT id, nombre FROM tema9.datos';
        $result = $base->query($sql);
        

        $datos = $result->fetch_all(MYSQLI_ASSOC);
        $result->free();
    }

    $base->close();
}

// Devolver la respuesta 
echo json_encode($datos);
?>