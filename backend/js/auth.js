import { 
    auth, 
    db 
  } from './firebase-config.js';
  
  import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signOut,
    onAuthStateChanged
  } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';
  
  import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp
  } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
  
  // Providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  // Sign up with email and password
  export const signUpWithEmail = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Sign in with email and password
  export const signInWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Sign in with Google
  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Sign in with GitHub
  export const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      return result.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Sign out
  export const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };
  
  // Create or update user profile document
  export const createUserProfile = async (userId, userData) => {
    try {
      const userRef = doc(db, "users", userId);
      await setDoc(userRef, {
        ...userData,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (error) {
      throw error;
    }
  };
  
  // Get user profile document
  export const getUserProfile = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        return userSnap.data();
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  };
  
  // Check if user has completed profile
  export const checkProfileStatus = async (userId) => {
    try {
      const userProfile = await getUserProfile(userId);
      
      if (!userProfile) return { completed: false, currentStep: 'signuppage' };
      
      // Check basic info
      if (!userProfile.basicInfo) return { completed: false, currentStep: 'basicinfo' };
      
      // Check skills and interests
      if (!userProfile.skillsInterests) return { completed: false, currentStep: 'skillsinterests' };
      
      return { completed: true, currentStep: 'engindashboard' };
    } catch (error) {
      throw error;
    }
  };
  
  // Listen to auth state changes
  export const authStateListener = (callback) => {
    return onAuthStateChanged(auth, callback);
  };
  export{auth};
