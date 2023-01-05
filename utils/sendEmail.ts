import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

const sendEmail = async (name: string, email: string, message: string) => {
  const apiKey = process.env.apiKey;
  const config = {
    apiKey: apiKey,
    authDomain: "portfolio-1296a.firebaseapp.com",
    projectId: "portfolio-1296a",
    storageBucket: "portfolio-1296a.appspot.com",
    messagingSenderId: "493275092625",
    appId: "1:493275092625:web:c361179f35dd61af1bd130",
  };
  const app = initializeApp(config);
  const db = getFirestore(app);
  const ref = collection(db, "messages");
  return addDoc(ref, {
    created: serverTimestamp(),
    name: name,
    email: email,
    message: message,
  });
};

export default sendEmail;
