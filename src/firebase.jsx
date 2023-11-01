
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7wx_GvkCRavhRwVdRxdX3INHpWcfYZQc",
  authDomain: "login-2-8dfc6.firebaseapp.com",
  projectId: "login-2-8dfc6",
  storageBucket: "login-2-8dfc6.appspot.com",
  messagingSenderId: "1063052077738",
  appId: "1:1063052077738:web:06d9e3036645f0c9887ed3",
  measurementId: "G-5FNBFFDV9J"
};

// Initialize Firebase

//const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };