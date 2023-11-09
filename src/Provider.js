
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVtEwxK5bcEhRC1wr1vNAQg-5hjXnMHxU",
  authDomain: "blog-11-3b499.firebaseapp.com",
  projectId: "blog-11-3b499",
  storageBucket: "blog-11-3b499.appspot.com",
  messagingSenderId: "758315036731",
  appId: "1:758315036731:web:a6d9e946416fad84f5ec1e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
