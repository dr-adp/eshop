export const environment = {
  production: true
};

// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUhSTcRzjlQfCFDNlSCj8FJDGRQTgmpxY",
  authDomain: "eshop-d123a.firebaseapp.com",
  projectId: "eshop-d123a",
  storageBucket: "eshop-d123a.appspot.com",
  messagingSenderId: "612870329044",
  appId: "1:612870329044:web:85f944519b8d0fd966a141",
  measurementId: "G-LXZ49SVQ52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
