import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGu1dUGp7nP-eT0NASH6tgxCdtjfi_Ok4",
  authDomain: "coderhose-ecommerce.firebaseapp.com",
  projectId: "coderhose-ecommerce",
  storageBucket: "coderhose-ecommerce.appspot.com",
  messagingSenderId: "215042625775",
  appId: "1:215042625775:web:7e0af4bbd38a83c8a30b1a"
}

const app = initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}