import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

function Toggle() {
  const [isToggle, setToggle] = useState(false);
  const transition = useTransition(isToggle, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <>
      <div style={{ position: "relative" }}>
        {transition.map(({ item, key, props }) =>
          item ? (
            <animated.h1 key={key} style={{ ...props, width: "100%" }}>
              Hello
            </animated.h1>
          ) : (
            <animated.h1 key={key} style={{ ...props, width: "100%" }}>
              World
            </animated.h1>
          )
        )}
      </div>
      <div>
        <button onClick={() => setToggle(!isToggle)}>Toggle</button>
      </div>
    </>
  );
}

export default Toggle;
