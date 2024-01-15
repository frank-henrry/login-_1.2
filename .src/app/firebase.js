import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
//credenciales
const firebaseConfig = {
  
    
};

export const app = initializeApp(firebaseConfig);//inicializacion
export const auth = getAuth(app)//obtencion de instancias de los servicios
export const db = getFirestore(app) // de autenticacion y base de datos
