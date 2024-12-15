import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem('authToken'));

    const login = () => {
        setAuth('fake-jwt-token');
        localStorage.setItem('authToken', 'fake-jwt-token');
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
