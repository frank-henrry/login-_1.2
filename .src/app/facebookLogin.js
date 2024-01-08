import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async e => {
  e.preventDefault();

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("iniciado session exitosamente");
    
    // Cierra el nodal
    const modal = bootstrap.Modal.getInstance(facebookButton.closest('.modal'));
    modal.hide();

    showMessage("Welcome " + credentials.user.email);
  } catch (error) {
    console.log(error);
  }

})