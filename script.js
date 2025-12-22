document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".semestre p").forEach(ramo => {
    ramo.addEventListener("click", () => {
      ramo.classList.toggle("aprobado");
    });
  });
});
