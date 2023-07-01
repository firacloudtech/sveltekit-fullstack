import { initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"
import { getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCAXIFfa0Y_WPz6z-cCzBgfvo5igY8rfXw",
  authDomain: "sveltekit-fullstack-67cb7.firebaseapp.com",
  projectId: "sveltekit-fullstack-67cb7",
  storageBucket: "sveltekit-fullstack-67cb7.appspot.com",
  messagingSenderId: "873190366936",
  appId: "1:873190366936:web:1bc89515a6a36aec5401ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();