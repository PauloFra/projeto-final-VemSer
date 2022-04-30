import logo from "../../images/logoSVG.svg";
import { Link } from "react-router-dom";
import * as C from "./Logo.styles";
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
