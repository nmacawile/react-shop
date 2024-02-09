import "./App.css";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import CartDrawer from "./components/CartDrawer.jsx";
import { useState } from "react";
import Breadcrumbs from "./components/Breadcrumbs.jsx";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <Header setCartIsOpen={setCartIsOpen} />
      <CartDrawer
        setIsOpen={setCartIsOpen}
        isOpen={cartIsOpen}
      ></CartDrawer>
      <main className="main-content p-4 sm:p-8 sm:pt-4">
        <Breadcrumbs />
        <Outlet />
      </main>
    </>
  );
}

export default App;
