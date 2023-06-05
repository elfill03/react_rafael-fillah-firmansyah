// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaoPQHz0RxisAgqoMPj3R7Otm8hjrN3WQ",
  authDomain: "testing-login-3bb32.firebaseapp.com",
  projectId: "testing-login-3bb32",
  storageBucket: "testing-login-3bb32.appspot.com",
  messagingSenderId: "227949800704",
  appId: "1:227949800704:web:aafbee816b0069782657e5",
  measurementId: "G-G8D2ZJCHN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app