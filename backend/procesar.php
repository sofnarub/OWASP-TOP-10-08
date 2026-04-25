<?php
header("Content-Type: application/json");

// Obtener datos
$data = json_decode(file_get_contents("php://input"), true);

$user = $data["user"] ?? "";
$password = $data["password"] ?? "";

// ✔️ Validación básica
if (
    !preg_match('/^[a-zA-Z0-9]{1,50}$/', $user) ||
    strlen($password) < 4 || strlen($password) > 50
) {
    echo json_encode(["mensaje" => "Entrada inválida"]);
    exit;
}

// ✔️ Respuesta coherente (sin lógica falsa)
echo json_encode([
    "mensaje" => "Datos recibidos correctamente"
]);
?>