import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCihyDUx1cnlYrh6YpKFEUMGCL44225DU0",
  authDomain: "rodriguezjulian-ecommerce.firebaseapp.com",
  projectId: "rodriguezjulian-ecommerce",
  storageBucket: "rodriguezjulian-ecommerce.appspot.com",
  messagingSenderId: "713739682973",
  appId: "1:713739682973:web:72c78ac46ddc6b3b3a0074"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app