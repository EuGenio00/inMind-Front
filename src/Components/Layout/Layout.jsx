import { Outlet } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <main>
      <LandingPage />
      <Footer />
      <Outlet />
    </main>
  );
};

export default Layout;
