import React, { createContext, useEffect, useState } from "react";
import { loginDTO } from "../model/LoginDTO";
import api from "../../src/api";
import Loading from "../components/loading/Loading";
import { useNavigate } from "react-router-dom";
type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  handleLogin: Function;
  setIsLogged: Function;
  handleLogout: Function;
  isLogged: boolean;
  candidatoCompleto: any;
};

const initialState = {
  handleLogin: () => {},
  setIsLogged: () => {},
  handleLogout: () => {},
  isLogged: false,
  getCompletoCandidato: () => {},
  candidatoCompleto: [],
};

export const AuthContext = createContext<ContextProps>(initialState);
export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [candidatoCompleto, setCandidatoCompleto] = useState<any>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
      setIsLogged(true);
    } else {
      navigate("/login");
    }
    setLoading(false);
  }, []);

  async function handleLogin(values: loginDTO) {
    try {
      const { data } = await api.post("/auth", values);
      localStorage.setItem("token", data);
      navigate("/");
      setIsLogged(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
    setIsLogged(false);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <AuthContext.Provider
      value={{
        setIsLogged,
        handleLogin,
        handleLogout,
        isLogged,
        candidatoCompleto,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
