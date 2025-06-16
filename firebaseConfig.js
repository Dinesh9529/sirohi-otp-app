import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9Ay-fL_ai0-vSIeeYMKrWGB_Fk2huJYM",
  authDomain: "sirohibazar-a1f79.firebaseapp.com",
  projectId: "sirohibazar-a1f79",
  storageBucket: "sirohibazar-a1f79.firebasestorage.app",
  messagingSenderId: "943305647594",
  appId: "1:943305647594:web:b0bf07a2583b5a2e763e93",
  measurementId: "G-YX52VGN32V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier };