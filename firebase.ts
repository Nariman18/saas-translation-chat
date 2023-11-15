import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAQkW4v1RmrBv97FeUsMqp5o8XxRBaJSv4",
  authDomain: "saas-translation-chat-41795.firebaseapp.com",
  projectId: "saas-translation-chat-41795",
  storageBucket: "saas-translation-chat-41795.appspot.com",
  messagingSenderId: "1014115411980",
  appId: "1:1014115411980:web:768d6c8ae7c24fb5466629",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
