import { useParams } from "react-router-dom";
import titleCase from "../helpers/titleCase";

export function Category() {
  const { category } = useParams();

  return <h1 className="text-2xl">{titleCase(category)}</h1>;
}

export default Category;
