import { register, login, getMe, logout } from "../services/auth.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../authContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { loading, setLoading, user, setUser } = context;

  async function handleLogin(email, password) {
    setLoading(true);
    const data = await login(email, password);
    setUser(data.user);
    setLoading(false);
  }

  async function handleRegister(username, email, password) {
    setLoading(true);
    const data = await register(username, email, password);
    setUser(data.user);
    setLoading(false);
  }

  async function handleGetMe() {
    setLoading(true);
    const data = await getMe();
    setUser(data.user);
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    await logout();
    setUser(null);
    setLoading(false);
  }

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    loading,
    user,
    handleLogin,
    handleRegister,
    handleGetMe,
    handleLogout,
  };
};
