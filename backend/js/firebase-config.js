import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyD4juOcl0D40m4iJDEdYycjSOOP0LmIHYk",
    authDomain: "engin-55306.firebaseapp.com",
    projectId: "engin-55306",
    storageBucket: "engin-55306.appspot.com", 
    messagingSenderId: "472329584102",
    appId: "1:472329584102:web:25118a09f3fc28386caa27",
    measurementId: "G-WH4B0Z6EC5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage, provider };
// Firebase configuration
export function signInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User Info:", result.user);
            alert(`Welcome ${result.user.displayName}`);
            window.location.href = "basicinfo.html"; 
        })
        .catch((error) => {
            console.error("Error during sign-in:", error);
            alert("Authentication failed!");
        });
}
