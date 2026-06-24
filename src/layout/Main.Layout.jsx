import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const MainLayout = () => {
  return (
    <div className="px-20 py-5">
      <Header />
      <Outlet />
    </div>
  );
};
