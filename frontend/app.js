document.getElementById("formulario").addEventListener("submit", async function(e) {
  e.preventDefault();

  const input = document.getElementById("user").value;
  const resultado = document.getElementById("resultado");

  // ✔️ Validación básica
  if (!/^[a-zA-Z0-9]+$/.test(input)) {
    resultado.textContent = "Entrada inválida";
    return;
  }

  try {
    const response = await fetch("backend/procesar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: input })
    });

    const data = await response.json();

    // ✔️ Renderizado seguro
    resultado.textContent = data.mensaje;

  } catch (error) {
    resultado.textContent = "Error en la petición";
  }
});