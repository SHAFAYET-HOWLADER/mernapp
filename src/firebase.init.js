
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA-XqItC9SyHaeH3llGqjIekHknutmSH44",
  authDomain: "meditaionapp-73b8b.firebaseapp.com",
  projectId: "meditaionapp-73b8b",
  storageBucket: "meditaionapp-73b8b.appspot.com",
  messagingSenderId: "117108844650",
  appId: "1:117108844650:web:5de7ddbe7235e12555c213"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
