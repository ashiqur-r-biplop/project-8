import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google provider
  const googleProvider = new GoogleAuthProvider();

  // Email Password Authentication
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update a user's profile
  const updateUserProfileName = (displayName) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
    });
  };

  // Sign in a user with an email address and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google Authentication
  const createUserWithGoogle = () => {
    console.log(auth);
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Delete na user from firebase
  const deleteAnUser = () => {
    setLoading(true);
    return deleteUser(user);
  };

  // Send a password reset email
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser && currentUser.email) {
      //   const loggedUser = {
      //     email: currentUser.email,
      //   };
      //   fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/jwt`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(loggedUser),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       localStorage.setItem("access-token", data.token);
      //     })
      //     .catch((error) => console.log(error));
      // } else {
      //   localStorage.removeItem("access-token");
      // }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUserWithEmail,
    updateUserProfileName,
    signIn,
    logOut,
    createUserWithGoogle,
    deleteAnUser,
    resetPassword,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
