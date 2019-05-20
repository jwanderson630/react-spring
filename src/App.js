import React, { useState } from "react";
import Header from "./Header";
import Toggle from "./Toggle2";
import ToggleArray from "./ToggleArray";
import Checkout from "./Checkout";
import "./App.css";

const MenuContext = React.createContext({});

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <MenuContext.Provider value={{ isOpen, setOpen: () => setOpen(!isOpen) }}>
        <Header />
        {/* <Menu /> */}
        <Checkout />
        <main>
          <Toggle />
          <ToggleArray />
        </main>
      </MenuContext.Provider>
    </div>
  );
}

export { MenuContext };
export default App;
