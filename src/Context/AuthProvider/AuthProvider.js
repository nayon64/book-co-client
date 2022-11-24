import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import toast from 'react-hot-toast';

const auth= getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const [loading,setLoading]=useState(true)

	// user Observer 
	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, currenUser => {
			setUser(currenUser)
			setLoading(false)
		})
		return ()=> unSuscribe(); 
	}, [])
	
	// create user by email and password 
	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password);
	}

	// user log in by eamil and password 
	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	// update user name and image url 
	const updateUserProfile = (profile) => {
		return updateProfile(auth.currentUser,profile);
	}


	// provider login 
	const signInWithProvider = provider => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	}

	const logOut = () => {
		setLoading(true);
		return signOut(auth)
	}

	const AuthInfo = { user, createUser, updateUserProfile, signInWithProvider, logIn, loading, logOut };

	return <AuthContext.Provider value={AuthInfo}>
{children}
	</AuthContext.Provider>;
};

export default AuthProvider;