function updateDateTime() {
    const now = new Date();

    // Obtiene el idioma seleccionado en el selector
    const selectedLanguage = document.getElementById('languageSelector').value;

    // Opciones para la fecha y hora, aplicando el idioma seleccionado
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(selectedLanguage, options);
    const timeString = now.toLocaleTimeString(selectedLanguage, { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById('date-time').innerText = `${dateString} - ${timeString}`;
}

// Actualiza la fecha y hora cada segundo
setInterval(updateDateTime, 1000);
updateDateTime(); // Llama a la función inmediatamente para establecer el tiempo al cargar

// Escucha el cambio de idioma y actualiza el tiempo de inmediato
document.getElementById('languageSelector').addEventListener('change', updateDateTime);
