import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as C from "./Footer.styles";

function Footer() {
  const { isLogged } = useContext(AuthContext);

  return (
    <>
      {isLogged && (
        <C.Footer>
          <p>
            Projeto realizado pela equipe VemCV, Front-end: Gabriel Gomes e
            Paulo Fraga Backend: Gustavo Barbosa e Pablo Kappa Product Owner:
            Tiago Schmidt
          </p>
        </C.Footer>
      )}
    </>
  );
}

export default Footer;
