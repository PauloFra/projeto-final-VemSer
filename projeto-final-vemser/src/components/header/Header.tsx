import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as C from "./Header.styles";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
function Header() {
  const { isLogged, handleLogout, nomeUsuario } = useContext(AuthContext);

  return (
    <>
      {isLogged && (
        <C.ContainerHeader>
          <Logo />
          <nav>
            <C.Ulflex>
              <C.Li>
                <Link to="/">Vagas</Link>
              </C.Li>
              <C.Li>
                <Link to="/curriculos">Candidatos</Link>
              </C.Li>
              <C.Li>
                <h4>{nomeUsuario}</h4>
              </C.Li>
              <C.Li>
                <C.ButtonLogout onClick={() => handleLogout()}>
                  Logout
                </C.ButtonLogout>
              </C.Li>
            </C.Ulflex>
          </nav>
        </C.ContainerHeader>
      )}
    </>
  );
}

export default Header;
