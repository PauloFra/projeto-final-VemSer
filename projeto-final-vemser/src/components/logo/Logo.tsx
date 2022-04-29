import React from "react";
import logo from "../../images/logoSVG.svg";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div>
      <Link to={"/"}>
        <h3>Vem CV</h3>
        {/* <img src={logo} alt="" /> */}
      </Link>
    </div>
  );
}

export default Logo;
