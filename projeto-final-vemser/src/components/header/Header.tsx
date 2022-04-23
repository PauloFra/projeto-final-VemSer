import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Ulflex, ContainerHeader ,ButtonLogout } from "./Header.styles";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
function Header() {
  const { isLogged, handleLogout } = useContext(AuthContext);

  return (
    <>
      {isLogged && (
        <ContainerHeader>
          <Logo />
          <nav>
            <Ulflex>
              <li>
                <Link to="/">Vagas</Link>
              </li>
              <li>
                <Link to="/curriculos">Candidatos</Link>
              </li>
              <li>
                <ButtonLogout onClick={() => handleLogout()}>Logout</ButtonLogout>
              </li>
            </Ulflex>
          </nav>
        </ContainerHeader>
      )}
    </>
  );
}

export default Header;
