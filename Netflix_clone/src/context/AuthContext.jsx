/* eslint-disable react-refresh/only-export-components */
import { db } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	getAuth,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

//
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setuser] = useState({});

	//signup
	function signUp(email, password) {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, "users", email), {
			savedShows: [],
		});
	}

	// login
	function login(email, password) {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, email, password);
	}

	//logout
	function logOut() {
		const auth = getAuth();
		return signOut(auth);
	}

	//track changed state
	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setuser(currentUser);
		});

		//clean up
		return () => unsubscribe();
	});

	return (
		<AuthContext.Provider value={{ signUp, login, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
}
export function useAuth() {
	return useContext(AuthContext);
}
