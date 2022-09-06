import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY_ENV,
  authDomain: process.env.REACT_APP_AUTHDOMAIN_ENV,
  projectId: process.env.REACT_APP_PROJECTID_ENV,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET_ENV,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_ENV,
  appId: process.env.REACT_APP_APPID_ENV
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
