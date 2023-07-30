// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5SXsDWHayXuQdh_LqmT3MqLspDKHpInk",
  authDomain: "hyubaca-58cec.firebaseapp.com",
  projectId: "hyubaca-58cec",
  storageBucket: "hyubaca-58cec.appspot.com",
  messagingSenderId: "961550122516",
  appId: "1:961550122516:web:cbe35fdb2b1e35029db101",
  measurementId: "G-SSQLJ5V181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;