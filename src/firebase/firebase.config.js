import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ30xyT7iiF-uaX7yU1OxX4KLw_OW-2og",
  authDomain: "assingment-10-5eb32.firebaseapp.com",
  projectId: "assingment-10-5eb32",
  storageBucket: "assingment-10-5eb32.appspot.com",
  messagingSenderId: "517204861535",
  appId: "1:517204861535:web:b7f18c4f507381e4e031ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
