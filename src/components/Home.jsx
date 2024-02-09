import { useDispatch } from "react-redux";
import Categories from "./Categories.jsx";
import HomeCarousel from "./HomeCarousel.jsx";
import { useEffect } from "react";
import { setBreadcrumbs } from "../features/breadcrumbs/breadcrumbsSlice.js";

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBreadcrumbs([{ title: "Home" }]));
  }, []);

  return (
    <>
      <HomeCarousel />
      <Categories />
    </>
  );
}

export default Home;
