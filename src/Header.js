import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import { MenuContext } from "./App";
import logo from "./logo.svg";

function Header() {
  const { setOpen } = useContext(MenuContext);
  return (
    <header className="App-header">
      <img alt="Logo" src={logo} className="logo" />
      <button className="menu-button" onClick={setOpen}>
        Menu
      </button>
    </header>
  );
}

export default Header;
