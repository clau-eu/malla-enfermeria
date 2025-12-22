alert("JS CARGADO");
document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".semestre p");

  // cargar aprobados guardados
  const aprobadosGuardados = JSON.parse(localStorage.getItem("aprobados")) || [];

  ramos.forEach((ramo) => {
    const nombre = ramo.textContent.trim();

    if (aprobadosGuardados.includes(nombre)) {
      ramo.classList.add("aprobado");
    }

    ramo.addEventListener("click", () => {
      ramo.classList.toggle("aprobado");

      let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

      if (ramo.classList.contains("aprobado")) {
        if (!aprobados.includes(nombre)) {
          aprobados.push(nombre);
        }
      } else {
        aprobados = aprobados.filter(r => r !== nombre);
      }

      localStorage.setItem("aprobados", JSON.stringify(aprobados));
    });
  });
});
