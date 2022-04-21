import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerHeader } from "./Header.styles";
function Header() {
  const { isLogged, setIsLogged } = useContext<any>(AuthContext);

  return <ContainerHeader>{isLogged && <p>teste</p>}</ContainerHeader>;
}

export default Header;
