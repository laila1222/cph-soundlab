import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/menu";
import "./_header.scss";


function Header() {
  return (
    <header className="header ">
      <div className="header__content u-flex u-space-between">
        <Logo />
        {/* <Navbar /> */}
        <Menu />
      </div>
    </header>
  );
}

export default Header;
