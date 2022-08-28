  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBcwZ4NwtVauBLsdSgHPTasZK_TWfqV1Gg",
    authDomain: "ddclub-75396.firebaseapp.com",
    projectId: "ddclub-75396",
    storageBucket: "ddclub-75396.appspot.com",
    messagingSenderId: "485354463812",
    appId: "1:485354463812:web:edc9a9dc074237d3731211",
    measurementId: "G-70R27XG2HZ"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);