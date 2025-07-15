import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJed3rFyPsy_ZwBwG1YhkImZGRXsd_Unc",
  authDomain: "chamados-ti-7ac7a.firebaseapp.com",
  projectId: "chamados-ti-7ac7a",
  storageBucket: "chamados-ti-7ac7a.firebasestorage.app",
  messagingSenderId: "196692540593",
  appId: "1:196692540593:web:edf6254c3ce3f457e47690",
  measurementId: "G-QJMMY6NPWN"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };