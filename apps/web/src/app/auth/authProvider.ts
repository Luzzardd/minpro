import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the User interface
interface User {
  id: string;
  name: string;
  email: string;
  role: string; // Add role type if needed
}

// Define the AuthContextType interface
interface AuthContextType {
  user: User | null; // User type or null
  registerUser: (name: string, email: string, password: string, referral: string) => Promise<void>;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // User state

  // Function to register a user
  const registerUser = async (name: string, email: string, password: string, referral: string) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, referral }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const newUser = await response.json();
      setUser(newUser); // Update user state
    } catch (error) {
      console.error('Error during registration:', error);
      throw error; // Rethrow the error for further handling if needed
    }
  };

  // Return the provider with the user and registerUser function
  return (
    <AuthContext.Provider value={{ user, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
