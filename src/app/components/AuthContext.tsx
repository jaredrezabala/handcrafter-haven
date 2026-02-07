"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserType = "customer" | "artisan";

export interface User {
  id: string;
  email: string;
  name: string;
  userType: UserType;
  // artisan-specific fields
  bio?: string;
  location?: string;
  profileImage?: string;
  workshopName?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
  isLoading: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
  userType: UserType;
  // artisan extra fields
  workshopName?: string;
  bio?: string;
  location?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on mount (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("handcrafted_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call - replace with real API
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock users database (replace with real backend)
    const mockUsers: User[] = [
      {
        id: "1",
        email: "maria@ceramica.com",
        name: "María González",
        userType: "artisan",
        workshopName: "Cerámica María",
        bio: "María has been crafting handmade ceramics for over 15 years, blending traditional techniques with modern design to create timeless pieces for everyday use.",
        location: "Cuenca, Ecuador",
      },
      {
        id: "2",
        email: "cliente@test.com",
        name: "Juan Pérez",
        userType: "customer",
      },
    ];

    const foundUser = mockUsers.find((u) => u.email === email);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("handcrafted_user", JSON.stringify(foundUser));
    } else {
      throw new Error("Usuario o contraseña incorrectos");
    }

    setIsLoading(false);
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);

    // Simulate API call - replace with real API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newUser: User = {
      id: String(Date.now()),
      email: data.email,
      name: data.name,
      userType: data.userType,
      ...(data.userType === "artisan" && {
        workshopName: data.workshopName,
        bio: data.bio,
        location: data.location,
      }),
    };

    setUser(newUser);
    localStorage.setItem("handcrafted_user", JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("handcrafted_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}