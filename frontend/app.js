document.getElementById("formulario").addEventListener("submit", async function(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const resultado = document.getElementById("resultado");

  // Validación básica
  if (!/^[a-zA-Z0-9]+$/.test(user)) {
    resultado.textContent = "Entrada inválida";
    return;
  }
x = ?;
  try {
    const response = await fetch("/backend/procesar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user, password })
    });

    const data = await response.json();

    resultado.textContent = data.mensaje;

  } catch (error) {
    resultado.textContent = "Error en la petición";
  }
});
