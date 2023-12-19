import "./App.css";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="main-content p-4 sm:p-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
