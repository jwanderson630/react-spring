import React, { useState } from "react";
import Header from "./Header";
import Checkout from "./Checkout";
import SlidingRouter from "./SlidingRouter";
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
          {/* <Toggle />
          <ToggleArray /> */}
          <SlidingRouter />
        </main>
      </MenuContext.Provider>
    </div>
  );
}

export { MenuContext };
export default App;
