import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBVHvQ6fCSE0tWWvOxADeNeTVMmcwTJchM",
  authDomain: "todolist-3a8db.firebaseapp.com",
  projectId: "todolist-3a8db",
  storageBucket: "todolist-3a8db.appspot.com",
  messagingSenderId: "197939125876",
  appId: "1:197939125876:web:23056efa8f21634867fb21"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);