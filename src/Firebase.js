
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBn36o3PNCq5gvGxA9QJV10fBTmQJ_-0-w",
  authDomain: "tallycounter-7b77f.firebaseapp.com",
  projectId: "tallycounter-7b77f",
  storageBucket: "tallycounter-7b77f.appspot.com",
  messagingSenderId: "949001321058",
  appId: "1:949001321058:web:5b25d02f29d26028a1af3b",
  measurementId: "G-NEZRNMM1QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


