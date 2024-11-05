"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const router = useRouter();
  const fetchUser = async () => {
    try {
      const response = await fetch("/api/loggedUser", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        setUserData({ name: data.user.user.name, email: data.user.user.email });
      } else {
        setUserData({ name: "", email: "" });
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch user data");
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const loggOut = async () => {
    const response = await fetch("/api/loggOut", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    try {
      if (response.ok) {
        setUserData({ name: "", email: "" });
        router.push("/sign-up");
        toast.success("Logged out successfully", {
          position: "bottom-center",
        });
      } else {
        const error = await response.json();
        toast.error(error.message || "Logout failed", {
          position: "bottom-center",
        });
      }
    } catch (error) {}
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, loggOut, fetchUser }}>
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
