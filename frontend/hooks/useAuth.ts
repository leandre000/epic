import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import api from '@/lib/api';

export const useAuth = () => {
  const { user, token, isAuthenticated, setAuth, logout, updateUser } = useAuthStore();

  useEffect(() => {
    if (token && !user) {
      // Fetch user data if token exists but user data is missing
      api.get('/auth/me')
        .then((response) => {
          setAuth(response.data.data.user, token);
        })
        .catch(() => {
          logout();
        });
    }
  }, [token, user, setAuth, logout]);

  return {
    user,
    token,
    isAuthenticated,
    logout,
    updateUser,
  };
};

