import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpTSdKCcE118VNYXi6hMLuz_Bl2bRSses",
  authDomain: "myblogapp-1106c.firebaseapp.com",
  projectId: "myblogapp-1106c",
  storageBucket: "myblogapp-1106c.appspot.com",
  messagingSenderId: "225389611033",
  appId: "1:225389611033:web:d3dc2d7e56396b94a20288",
  measurementId: "G-LEM7YTPDV5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
