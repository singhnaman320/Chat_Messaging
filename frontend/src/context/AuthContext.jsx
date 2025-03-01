import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
        // Auto-login if token exists
        if (token) {
            fetchUser();
        }
    }, [token]);

    const fetchUser = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (res.ok) setUser(data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const login = async (credentials) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });
            const data = await res.json();
            if (res.ok) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                fetchUser();
            }
            return data;
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
