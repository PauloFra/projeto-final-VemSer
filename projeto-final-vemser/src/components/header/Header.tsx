import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import { IoMdExit } from "react-icons/io";
import * as C from "./Header.styles";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
function Header() {
  const { isLogged, handleLogout, nomeUsuario } = useContext(AuthContext);

  return (
    <>
      {isLogged && (
        <C.ContainerHeader>
          <C.Nav>
            <Logo />

            <C.Ulflex>
              <C.Li>
                <Link to="/">Vagas</Link>
              </C.Li>
              <C.Li>
                <Link to="/curriculos">Candidatos</Link>
              </C.Li>
            </C.Ulflex>
          </C.Nav>
          <C.Logout>
            <h4>{/* {nomeUsuario} */}Administrador</h4>
            <C.ButtonLogout onClick={() => handleLogout()}>
              <IoMdExit />
            </C.ButtonLogout>
          </C.Logout>
        </C.ContainerHeader>
      )}
    </>
  );
}

export default Header;
