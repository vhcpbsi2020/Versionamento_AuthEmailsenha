
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_M9GyqH7ZdAUlbkg2Gz9dg57SXmRniJg",
  authDomain: "react-auth-bda40.firebaseapp.com",
  projectId: "react-auth-bda40",
  storageBucket: "react-auth-bda40.appspot.com",
  messagingSenderId: "220241049432",
  appId: "1:220241049432:web:beb2a2c82075a63362172d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);