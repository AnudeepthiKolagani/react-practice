import { Link } from "react-router-dom";

const headerValues = [
  { path: "/basics", value: "Basics" },
  { path: "/forms", value: "Forms" },
];
export const Header = () => {
  return (
    <div className="flex flex-row gap-5 justify-end items-center bg-blue-100 px-5 py-1 mb-2">
      {headerValues.map((header) => {
        console.log(header);
        return (
          <Link to={header.path} key={header.path}>
            {header.value}
          </Link>
        );
      })}
    </div>
  );
};
