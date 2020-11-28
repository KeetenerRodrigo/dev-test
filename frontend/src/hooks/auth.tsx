import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credetentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setDate] = useState<AuthState>(() => {
    const user = JSON.parse(localStorage.getItem('@Finance:user') || '{}');

    if (user) {
      return { user };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/auth', {
      email,
      password,
    });

    const user = response.data;

    localStorage.setItem('@Finance:user', JSON.stringify(user));

    setDate({ user });
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@Finance:user');

    setDate({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be ussed within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
