"use client";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({ name: "", email: "" });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
