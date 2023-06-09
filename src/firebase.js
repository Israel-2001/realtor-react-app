// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpE7wUKgRk0PUgXs9xWJ6qtvcVGWY0vyQ",
  authDomain: "realtor-clone-react-2f4fa.firebaseapp.com",
  projectId: "realtor-clone-react-2f4fa",
  storageBucket: "realtor-clone-react-2f4fa.appspot.com",
  messagingSenderId: "1020217041164",
  appId: "1:1020217041164:web:6f9a5b1f6cdcdde6b72929"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()