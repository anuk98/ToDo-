import { initializeApp } from 'firebase/app';
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCbPPgQ7OIhChdR5qAnUsiSnqueg7bMoHI",
  authDomain: "rocky-4cc66.firebaseapp.com",
  projectId: "rocky-4cc66",
  storageBucket: "rocky-4cc66.appspot.com",
  messagingSenderId: "565152584499",
  appId: "1:565152584499:web:1b053d5b2814286867a446",
  measurementId: "G-PF82E7YWTQ"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db =getFirestore(app)


