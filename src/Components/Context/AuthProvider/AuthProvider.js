import React, { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    const authInfo = { darkMode, setDarkMode }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;