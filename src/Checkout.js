import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import { MenuContext } from "./App";

function Checkout() {
  const { isOpen } = useContext(MenuContext);
  const { x } = useSpring({
    x: isOpen ? 0 : 100
  });
  return (
    <div
      className="checkout"
      style={{ pointerEvents: isOpen ? "all" : "none" }}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(-${x}%,0,0)`)
        }}
        className="checkout-left"
      />
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
        }}
        className="checkout-right"
      />
    </div>
  );
}

export default Checkout;
