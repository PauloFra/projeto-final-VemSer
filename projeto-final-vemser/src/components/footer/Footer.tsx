import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as C from "./Footer.styles";
function Footer() {
  const { isLogged, handleLogout } = useContext<any>(AuthContext);
  return <C.Footer>{isLogged && <p>Footer</p>}</C.Footer>;
}

export default Footer;
