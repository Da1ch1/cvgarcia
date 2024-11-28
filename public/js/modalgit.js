// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtener los elementos
    const gitmodal = document.getElementById("gitmodal");
    const modalContent = document.getElementById("modalContent");
    const modalgit = document.getElementById("modalgit");

    // Abrir el modal cuando se haga clic en el enlace
    modalgit.addEventListener("click", (e) => {
        e.preventDefault();  // Prevenir el comportamiento predeterminado del enlace
        gitmodal.classList.remove("hidden"); // Muestra el modal
    });

    // Cerrar el modal si el usuario hace clic fuera del contenido del modal
    gitmodal.addEventListener("click", (e) => {
        if (e.target === gitmodal) {  // Verifica si el clic fue fuera del modal
            gitmodal.classList.add("hidden");  // Oculta el modal
        }
    });

    // Evitar que el clic dentro del modal cierre el modal
    modalContent.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic se propague y cierre el modal
    });
});