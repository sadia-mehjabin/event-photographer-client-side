// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCtLucC1cLKHN7Qu2tbk6JI6DOIlV091u4",
//   authDomain: "event-photographer-99870.firebaseapp.com",
//   projectId: "event-photographer-99870",
//   storageBucket: "event-photographer-99870.appspot.com",
//   messagingSenderId: "109728392811",
//   appId: "1:109728392811:web:e9a9efc7087eddb497f32e"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;