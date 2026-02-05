<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBvbeP_CsKCad2mXFRONacVUzQjtKoWelw",
    authDomain: "milto-bank.firebaseapp.com",
    projectId: "milto-bank",
    storageBucket: "milto-bank.firebasestorage.app",
    messagingSenderId: "393791122217",
    appId: "1:393791122217:web:fc6d7b3b4a95d577962538",
    measurementId: "G-T60EX0HEZL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>