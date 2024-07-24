import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  let parsedUser = null;

  if (initialAuthUser) {
    try {
      parsedUser = JSON.parse(initialAuthUser);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
    }
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
