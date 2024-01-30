import "./App.css";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import CartDrawer from "./components/CartDrawer.jsx";
import { useState } from "react";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <Header setCartIsOpen={setCartIsOpen} />
      <CartDrawer
        setIsOpen={setCartIsOpen}
        isOpen={cartIsOpen}
      ></CartDrawer>
      <main className="main-content p-4 sm:p-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
