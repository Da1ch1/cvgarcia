// Obtener el enlace y el modal
const docsCard = document.getElementById('docs-card');
const modal2 = document.getElementById('modal2');
const modalContent2 = document.getElementById('modalContent2'); // Contenido del modal

// Abrir el modal cuando se haga clic en el enlace
docsCard.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    modal2.classList.remove('hidden'); // Mostrar el modal
});

// Cerrar el modal cuando se haga clic fuera del contenido del modal
modal2.addEventListener('click', function(e) {
    if (e.target === modal2) { // Verificar que el clic sea fuera del contenido
        modal2.classList.add('hidden'); // Ocultar el modal
    }
});

  // Prevent closing the modal if user clicks inside the modal content
  modalContent2.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the modal background
});