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
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [NoticeControl, setNoticeControl] = useState(false);

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
  console.log(user);
  // Manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log("data");
        axios
          .post("https://dhaka-bus-ticket-server-two.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            setUser(currentUser);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        console.log("logout successfully");
        localStorage.removeItem("access-token");
        setUser(currentUser);
        setLoading(false);
      }
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
    NoticeControl,
    setNoticeControl,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
