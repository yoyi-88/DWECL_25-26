<?php
// 1. Cabecera CORS
header("access-control-allow-origin: *");
header('Content-Type: application/json'); // ¡Añadimos esta cabecera para asegurar la respuesta JSON!

// Datos de conexión a la BBDD (revisa que sean correctos)
$host = 'localhost';
$user = 'root';
$pass = ''; // Contraseña vacía por defecto en XAMPP
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
        // --- PETICIÓN DE DETALLE POR ID ---
        
        $sql = 'SELECT * FROM tema9.datos WHERE id=?';
        $stmt = $base->prepare($sql);

        // Verifica si la preparación de la consulta falló (por si hay error en SQL)
        if (!$stmt) {
             $datos = ['error' => true, 'mensaje' => 'Fallo al preparar la consulta de detalle: ' . $base->error];
        } else {
            $stmt->bind_param('i', $_GET['id']);
            $stmt->execute();
            $resultado = $stmt->get_result();
            $datos = $resultado->fetch_assoc();
            $stmt->close();
        }

    } else {
        // --- PETICIÓN INICIAL DE NOMBRES ---
        
        $sql = 'SELECT id, nombre FROM tema9.datos';
        $result = $base->query($sql);
        
        if ($result) {
            $datos = $result->fetch_all(MYSQLI_ASSOC);
            $result->free();
        } else {
             $datos = ['error' => true, 'mensaje' => 'Fallo en la consulta inicial: ' . $base->error];
        }
    }

    $base->close();
}

// 3. Devolver la respuesta (será JSON de datos o JSON de error)
echo json_encode($datos);
?>