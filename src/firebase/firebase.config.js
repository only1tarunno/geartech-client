import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAV8-a_IE2RILE0AHt7cuf6S0axChgSLbs",
  authDomain: "geartech-e9eeb.firebaseapp.com",
  projectId: "geartech-e9eeb",
  storageBucket: "geartech-e9eeb.appspot.com",
  messagingSenderId: "497931912353",
  appId: "1:497931912353:web:ba20adfd207067f9fedce0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
