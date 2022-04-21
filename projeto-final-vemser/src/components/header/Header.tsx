import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerHeader } from "./Header.styles";
import Logo from "../logo/Logo";
function Header() {
  const { isLogged, setIsLogged } = useContext<any>(AuthContext);

  return (  
  
  <ContainerHeader>
    <Logo />
    <button>Logout</button>
  </ContainerHeader>
  )
}

export default Header;
