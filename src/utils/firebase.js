// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-mongodb-679ff.firebaseapp.com",
  projectId: "blog-mongodb-679ff",
  storageBucket: "blog-mongodb-679ff.appspot.com",
  messagingSenderId: "853484502796",
  appId: "1:853484502796:web:a342f811cbcf051f201329",
  measurementId: "G-WFDEP2NWG4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
