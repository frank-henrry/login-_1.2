import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";


const signInForm = document.querySelector("#login-form");//abre el modal para inicio de session

signInForm.addEventListener("submit", async (e) => {//envia los datos ingresados
  e.preventDefault();
  const email = signInForm["login-email"].value;//almacena el email del usuario.
  const password = signInForm["login-password"].value;//almacena la contraseña.

  try {
    //inicia session
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    // cierra el nodal si es correcto
    const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    modal.hide();

    signInForm.reset();
   
    showMessage("Welcome  " + userCredentials.user.email);
    
    //window.location.href = "/dashboard.html";
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Wrong password", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("User not found", "error")
    } else {
      showMessage("Something went wrong", "error")
    }
  }
});