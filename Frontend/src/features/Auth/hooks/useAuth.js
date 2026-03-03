import { AuthContext } from "../auth.context";
import { useContext, useEffect } from "react";
import { register, login, getMe, Logout } from "../services/auth.api";
export const useAuth = () => {
  const context = useContext(AuthContext);

  const { loading, setLoading, user, setUser } = context;

  const handleRegister = async (username, email, password) => {
    setLoading(true);
    const data = await register(username, email, password);
    setUser(data.user);
    setLoading(false);
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    const data = await login(email, password);
    setUser(data.user);
    setLoading(false);
  };

  const handleGetMe = async () => {
    setLoading(true);
    const data = await getMe();
    setUser(data.user);
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    await Logout();
    setUser(null);
    setLoading(false);
  };

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGetMe,
  };
};
