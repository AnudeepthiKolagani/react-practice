import { Link } from "react-router-dom";

const headerValues = [
  { path: "/counter", value: "Counter" },
  { path: "/todo", value: "Todo" },
  { path: "/accordion", value: "Accordion" },
];
export const Header = () => {
  return (
    <div className="flex flex-row gap-5 justify-end items-center bg-amber-100 px-5 py-1">
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
