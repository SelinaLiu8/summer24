import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const executeCreateUserWithEmailAndPassword = async(email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const executeSignInWithEmailAndPassword = async(email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const executeGoogleSignIn = async() => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const result = await signInWithPopup(auth, provider);
    return result;
}

export const executeSignOut = async() => {
    return auth.signOut();
}