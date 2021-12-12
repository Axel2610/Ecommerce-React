// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABn29p322do2zpXOLxSTE3K3Q2SLiiVj8",
  authDomain: "ecommercereact-9bd1a.firebaseapp.com",
  projectId: "ecommercereact-9bd1a",
  storageBucket: "ecommercereact-9bd1a.appspot.com",
  messagingSenderId: "963255571457",
  appId: "1:963255571457:web:2eab62af84d7db3cb69c00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)