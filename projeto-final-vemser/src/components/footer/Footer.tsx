import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as C from "./Footer.styles";
function Footer() {
  const { isLogged } = useContext<any>(AuthContext);
  return <C.Footer>{isLogged && <p>footer</p>}</C.Footer>;
}

export default Footer;
