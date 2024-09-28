
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZkxpTmzSqHAn-mMOPG_wVSwEDCIR4uzo",
  authDomain: "filmes-5f106.firebaseapp.com",
  projectId: "filmes-5f106",
  storageBucket: "filmes-5f106.appspot.com",
  messagingSenderId: "763632291444",
  appId: "1:763632291444:web:c7c86e005c2e683c9a8b21",
  measurementId: "G-PH4HS08D2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const bd = getFirestore(app);

export {app, auth,bd};
