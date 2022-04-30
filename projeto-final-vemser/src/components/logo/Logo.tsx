import logo from "../../images/logoSVG.svg";
import * as C from "./Logo.styles";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <C.BackGroundTabela>
      <Link to={"/"}>
        <img src={logo} alt="logo da empresa VemCV" />
      </Link>
    </C.BackGroundTabela>
  );
}

export default Logo;
