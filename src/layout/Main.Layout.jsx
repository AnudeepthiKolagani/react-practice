import { Outlet } from "react-router-dom";
import { Header } from "../components/headers/Header";

export const MainLayout = () => {
  return (
    <div className="px-20 py-5">
      <Header />
      <Outlet />
    </div>
  );
};
