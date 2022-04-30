import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginDTO } from "../model/LoginDTO";
import Notiflix from "notiflix";
import api from "../../src/api";
import Loading from "../components/loading/Loading";
type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  handleLogin: Function;
  setIsLogged: Function;
  handleLogout: Function;
  isLogged: boolean;
  candidatoCompleto: Object;
  nomeUsuario: string | null;
};

const initialState = {
  handleLogin: () => {},
  setIsLogged: () => {},
  handleLogout: () => {},
  isLogged: false,
  getCompletoCandidato: () => {},
  candidatoCompleto: [],
  nomeUsuario: "",
};

export const AuthContext = createContext<ContextProps>(initialState);
export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState<string | null>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [candidatoCompleto, setCandidatoCompleto] = useState<[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
      setIsLogged(true);
      const nomeUser = localStorage.getItem("nomeUser");
      setNomeUsuario(nomeUser);
    } else {
      navigate("/login");
    }

    setLoading(false);
  }, []);

  async function handleLogin(values: loginDTO) {
    try {
      const { data } = await api.post("/auth", values);
      localStorage.setItem("token", data);

      localStorage.setItem("nomeUser", values.usuario);
      navigate("/");

      Notiflix.Notify.success("Seja bem vindo!", {
        timeout: 1000,
        position: "center-top",
      });
      setIsLogged(true);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    localStorage.removeItem("nomeUser");
    localStorage.removeItem("token");
    navigate("/login");
    setIsLogged(false);
  }

  if (loading) {
    return <Loading altura="100vh" largura="100vw" />;
  }
  return (
    <AuthContext.Provider
      value={{
        setIsLogged,
        handleLogin,
        handleLogout,
        isLogged,
        candidatoCompleto,
        nomeUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
