import { Outlet } from "react-router-dom";
import { BasicsHeader } from "../components/headers/BasicsHeader";

export const BasicLayout = () => {
  return (
    <div>
      <BasicsHeader />
      <Outlet />
    </div>
  );
};
