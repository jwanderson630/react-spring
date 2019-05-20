import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

function ToggleArray() {
  const [items, setItems] = useState([
    {
      letter: "J",
      key: 1
    },
    {
      letter: "o",
      key: 2
    },
    {
      letter: "e",
      key: 3
    }
  ]);
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <>
      <div>
        {transition.map(({ item, key, props }) => (
          <animated.h1 key={key} style={{ ...props, display: "inline-block" }}>
            {item.letter}
          </animated.h1>
        ))}
      </div>
      <div>
        <button
          onClick={() =>
            // setItems(items => {
            //   let newItems = [...items];
            //   const moveToLast = newItems.shift();
            //   newItems.push(moveToLast);
            //   return newItems;
            // })
            setItems([
              {
                letter: "J",
                key: 1
              }
            ])
          }
        >
          Toggle
        </button>
      </div>
    </>
  );
}

export default ToggleArray;
