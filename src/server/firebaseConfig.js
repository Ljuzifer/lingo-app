import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDrA5-K25u4klaTM3m3jl8xvyh419yFO0c",
//   authDomain: "lingo-db.firebaseapp.com",
//   databaseURL: "https://lingo-db-default-rtdb.firebaseio.com",
//   projectId: "lingo-db",
//   storageBucket: "lingo-db.appspot.com",
//   messagingSenderId: "1073634621487",
//   appId: "1:1073634621487:web:4d69ffcfc7ddb4fa27eeda",
//   measurementId: "G-2LWZR3SWS6",
// };

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const dbRef = ref(db);
