import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import { MenuContext } from "./App";

function Menu() {
  const menuContext = useContext(MenuContext);
  const fade = useSpring({
    transform: menuContext.isOpen
      ? "translate3d(0,0,0)"
      : "translate3d(100%, 0, 0)"
  });
  return (
    <animated.div style={fade} className="nav-wrapper">
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Store</a>
        <a href="#">Tutorials</a>
      </nav>
    </animated.div>
  );
}

export default Menu;
