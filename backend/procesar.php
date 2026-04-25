<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["mensaje" => "Error: JSON no recibido"]);
    exit;
}

$user = trim($data["user"] ?? "");
$password = trim($data["password"] ?? "");

if (
    !preg_match('/^[a-zA-Z0-9]{1,50}$/', $user) ||
    strlen($password) < 4 || strlen($password) > 50
) {
    echo json_encode(["mensaje" => "Entrada inválida"]);
    exit;
}

echo json_encode([
    "mensaje" => "Datos recibidos correctamente"
]);
?>