import React from "react";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Airbnb" className="nav--logo" />
    </nav>
  );
}

export default Navbar;
