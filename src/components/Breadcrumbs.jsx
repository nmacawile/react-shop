import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Breadcrumbs.css";

export function Breadcrumbs() {
  const breadcrumbs = useSelector((state) => state.breadcrumbs.value);

  return (
    <div className="overflow-hidden w-full mb-4">
      <nav className="overflow-hidden bg-gray-100 w-full text-ellipsis whitespace-nowrap flex flex-row gap-2 p-2 px-4 mb-4 text-md font-semibold text-gray-600 rounded justify-items-start w-full shadow">
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <span key={`breadcrumb-${i}`} className="crumb text-ellipsis last:overflow-hidden last:text-ellipsis">
              {breadcrumb.link ? (
                <Link className="text-sky-600" to={breadcrumb.link}>
                  {breadcrumb.title}
                </Link>
              ) : (
                breadcrumb.title
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}

export default Breadcrumbs;
