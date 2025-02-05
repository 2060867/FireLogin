// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYd4L4wpDOf_nSKm6Nb0QiFNcMYRnJfVE",
  authDomain: "fir-login-590fb.firebaseapp.com",
  projectId: "fir-login-590fb",
  storageBucket: "fir-login-590fb.firebasestorage.app",
  messagingSenderId: "761274709023",
  appId: "1:761274709023:web:d889cf31f1cacb8403112a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);