// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASdgjaWpeCSNkNaOAP20c2dQd80K72gJ4",
  authDomain: "mhs-food-paradise.firebaseapp.com",
  projectId: "mhs-food-paradise",
  storageBucket: "mhs-food-paradise.appspot.com",
  messagingSenderId: "251313564147",
  appId: "1:251313564147:web:bf42dcfec765141d22ca86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;