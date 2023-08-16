// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB1OZ2TUKwPN_WyUlzN3ClvYQq_4eQJ12Y",
	authDomain: "fir-auth-react-93d93.firebaseapp.com",
	projectId: "fir-auth-react-93d93",
	storageBucket: "fir-auth-react-93d93.appspot.com",
	messagingSenderId: "696229219024",
	appId: "1:696229219024:web:016293177b340155106cd5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
