const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
//muestra u oculta enlaces
export const loginCheck = (user) => {
  if (user) {
    //si un usuario esta conectado oculta el logged-out y logged-in
    //si esta conctado mnuestra (cerrar session)
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  } else {
    //si un usuario no esta conectado no oculta logged-out y logged-in
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  }
};