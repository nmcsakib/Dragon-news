// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:VITE_APIKEY,
  authDomain:VITE_AUTHDOMAIN,
  projectId:VITE_PROJECTID,
  storageBucket:VITE_STORAGEBUCKET,
  messagingSenderId:VITE_MESSAGINGSENDERID,
  appId:VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app