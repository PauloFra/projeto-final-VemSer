import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerHeader } from "./Header.styles";
import Logo from "../logo/Logo";
function Header() {
  const { isLogged ,handleLogout } = useContext<any>(AuthContext);
  
  console.log(isLogged);
  return (  
  
  <ContainerHeader> 
    {isLogged && 
    <>
      <Logo />
      <button onClick={()=>handleLogout()}>Logout</button>
    </>
    }
  </ContainerHeader>

  )
}

export default Header;
