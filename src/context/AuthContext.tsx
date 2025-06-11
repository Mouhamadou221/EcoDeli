import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'client@ecodeli.com',
    firstName: 'Jean',
    lastName: 'Dupont',
    role: 'client',
    isVerified: true,
    createdAt: '2024-01-01',
    phone: '+33 6 12 34 56 78'
  },
  {
    id: '2',
    email: 'delivery@ecodeli.com',
    firstName: 'Marie',
    lastName: 'Martin',
    role: 'delivery',
    isVerified: true,
    createdAt: '2024-01-01',
    phone: '+33 6 87 65 43 21'
  },
  {
    id: '3',
    email: 'merchant@ecodeli.com',
    firstName: 'Pierre',
    lastName: 'Durand',
    role: 'merchant',
    isVerified: true,
    createdAt: '2024-01-01',
    phone: '+33 6 11 22 33 44'
  },
  {
    id: '4',
    email: 'service@ecodeli.com',
    firstName: 'Sophie',
    lastName: 'Bernard',
    role: 'service',
    isVerified: true,
    createdAt: '2024-01-01',
    phone: '+33 6 55 66 77 88'
  },
  {
    id: '5',
    email: 'admin@ecodeli.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    isVerified: true,
    createdAt: '2024-01-01'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('ecodeli_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email);
    if (!foundUser) {
      throw new Error('Invalid credentials');
    }
    
    setUser(foundUser);
    localStorage.setItem('ecodeli_user', JSON.stringify(foundUser));
    setIsLoading(false);
  };

  const register = async (userData: RegisterData): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: userData.role,
      isVerified: false,
      createdAt: new Date().toISOString(),
      phone: userData.phone
    };
    
    setUser(newUser);
    localStorage.setItem('ecodeli_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ecodeli_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};