import { Outlet } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

const Layout = () => {
  return (
    <main>
      <LandingPage />
      <Outlet />
    </main>
  );
};

export default Layout;
