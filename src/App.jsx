import "./App.css";
import HomeCarousel from "./components/HomeCarousel.jsx";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main-content p-4 sm:p-8">
        <HomeCarousel />
        <Categories />
      </main>
    </>
  );
}

export default App;
