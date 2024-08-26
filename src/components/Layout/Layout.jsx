import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import "../../App.css";

export default function Layout() {
  const location = useLocation();
  const noLayout = ["./register", "/login", "/notfound"];
  const showLayout = !noLayout.includes(location.pathname);

  return (
    <div className="relative z-40 pb-[500px] flex-col min-h-screen lg:w-full sm:w-full md:w-full">
      {showLayout && <NavBar />}

      <Outlet />

      {showLayout && <Footer />}
    </div>
  );
}
