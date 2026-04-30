import { createContext, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  register: (user: User) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";

    return savedUser && loggedIn ? JSON.parse(savedUser) : null;
  });

  function register(newUser: User) {
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  function login(email: string, password: string) {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) return false;

    const parsedUser: User = JSON.parse(savedUser);

    if (parsedUser.email === email && parsedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      setUser(parsedUser);
      return true;
    }

    return false;
  }

  function logout() {
    localStorage.setItem("isLoggedIn", "false");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: Boolean(user),
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}