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

// Simulación de vulnerabilidad XSS !!!!!!
document.getElementById("resultado").innerHTML = "<img src=x onerror=alert(1)>";


    // Validación básica de la contraseña
  if (password.length < 4 || password.length > 50) {
    resultado.textContent = "Contraseña inválida";
    return;
  }

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
