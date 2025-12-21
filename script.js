document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".semestre p");

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      ramo.classList.toggle("aprobado");
    });
  });
});
