import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
//credenciales
const firebaseConfig = {
  
    apiKey: "AIzaSyDxkz7Hqq_S-8w94keyGir2zwQIkxd-R0k",
    authDomain: "prueba-feb52.firebaseapp.com",
    projectId: "prueba-feb52",
    storageBucket: "prueba-feb52.appspot.com",
    messagingSenderId: "473928079118",
    appId: "1:473928079118:web:615586273ef6b08db5695f"
};

export const app = initializeApp(firebaseConfig);//inicializacion
export const auth = getAuth(app)//obtencion de instancias de los servicios
export const db = getFirestore(app) // de autenticacion y base de datos
