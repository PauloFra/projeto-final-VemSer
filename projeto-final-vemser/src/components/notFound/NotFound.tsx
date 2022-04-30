import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import gifError from "./notfound.gif";
import * as C from "./NotFound.styles";
function NotFound() {
  const [contador, setContador] = useState(10);

  const navigate = useNavigate();
  function returnHome() {
    setTimeout(() => setContador(contador - 1), 1000);

    if (contador === 0) {
      navigate("/");
      clearTimeout(contador);
    }
  }
  {
    returnHome();
  }
  return (
    <C.Container>
      <C.GifError src={gifError} alt="" />
      <C.Info>
        <Link to="/">
          Clique aqui para ser direcionado a pagína inicial do sistema
          <C.P>
            ou aguarde que em {contador} segundos você sera redirecionado{" "}
          </C.P>
        </Link>
      </C.Info>
    </C.Container>
  );
}

export default NotFound;
