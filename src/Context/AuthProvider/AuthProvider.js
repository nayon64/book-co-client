import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth, signInWithPopup} from "firebase/auth"

const auth= getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	
	const signInWithProvider = provider => {
		return signInWithPopup(auth, provider);
	}

	const AuthInfo = { signInWithProvider };

	return <AuthContext.Provider value={AuthInfo}>
{children}
	</AuthContext.Provider>;
};

export default AuthProvider;