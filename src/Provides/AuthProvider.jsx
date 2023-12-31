import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spiner, setSpinner] = useState(true);
  const [theme, setTheme] = useState("light");
  const provider = new GoogleAuthProvider();

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  //   register user
  const register = (email, pass) => {
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sing in
  const logIn = (email, pass) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //   log out
  const logOut = () => {
    setSpinner(true);
    return signOut(auth);
  };

  //   auth observe
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setSpinner(false);
    });

    return () => {
      subscribe();
    };
  }, []);
  const authInfo = {
    user,
    spiner,
    register,
    logIn,
    logOut,
    googleLogin,
    setUser,
    theme,
    setTheme,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
