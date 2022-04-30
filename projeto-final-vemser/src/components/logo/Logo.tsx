import React from "react";
import logo from "../../images/logoSVG.svg";
import { Link } from "react-router-dom";
import * as C from "./Logo.styles";
function Logo() {
  return (
    <C.BackGroundTabela>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
    </C.BackGroundTabela>
  );
}

export default Logo;
