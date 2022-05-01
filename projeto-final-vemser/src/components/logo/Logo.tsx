import logo from "../../images/logoSVG.svg";
import * as C from "./Logo.styles";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <C.BackGroundTabela>
      <Link to={"/"}>
        <C.TitleLogo>VemCV</C.TitleLogo>
      </Link>
    </C.BackGroundTabela>
  );
}

export default Logo;
