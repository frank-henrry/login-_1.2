import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { auth } from "./firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    console.log("cerraste session");
    window.location.href = 'index1.html';
  } catch (error) {
    console.log(error)
  }
});