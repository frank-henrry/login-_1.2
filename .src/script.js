document.addEventListener("DOMContentLoaded", function() {
  // Ocultar la barra lateral al cargar la página
  var sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
});

function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var toggleButton = document.querySelector('.toggle-button');
  
  // Si la barra lateral está oculta, mostrarla y desplazar el botón hacia la derecha
  if (sidebar.style.display === 'none' || sidebar.style.display === '') {
    sidebar.style.display = 'flex';
    toggleButton.style.transform = 'translateX(200px)'; // Ajusta el valor según sea necesario
  } else {
    // Si la barra lateral está visible, ocultarla y regresar el botón a su posición original
    sidebar.style.display = 'none';
    toggleButton.style.transform = 'translateX(0)';
  }
}