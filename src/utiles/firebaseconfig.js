// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqRyizcOp965PP-9yGruLSsNSL34JOKmc",
  authDomain: "tienda-telefonito.firebaseapp.com",
  projectId: "tienda-telefonito",
  storageBucket: "tienda-telefonito.appspot.com",
  messagingSenderId: "17080910443",
  appId: "1:17080910443:web:d7d194c026891f0d69672e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
