import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/Api';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
  userId?: number;
}

const TOKEN_KEY = 'selpe-token';
export const API_URL = 'http://localhost:3000/';
export const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }: any) => {
  const [userId, setUserId] = useState<number>(0);
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: false
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log(token);

      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({
          token,
          authenticated: true
        });
      }
    };
    loadToken();
  }, []);

  const register = async (email: string, password: string) => {
    try {
      return await api.post('api/register', { email, password });
    } catch (error) {
      return error;
    }
  };

  const login = async (email: string, password: string) => {
    const data = {
      email,
      password
    };
    try {
      const response = await api.post('api/login', data).then(async (response) => {
        const user: number = response.data.user;
        setUserId(user);
        setAuthState({
          token: response.data.token,
          authenticated: true
        });
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        await SecureStore.setItemAsync(TOKEN_KEY, response.data.token);
        return response;
      });
    } catch (error) {
      return error;
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      api.defaults.headers.common['Authorization'] = '';
      setAuthState({
        token: null,
        authenticated: false
      });
      alert('Deslogado com sucesso!');
      console.log(authState?.authenticated);
    } catch (error) {
      alert('erro');
      console.log(error);
    }
  };
  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
    userId
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
