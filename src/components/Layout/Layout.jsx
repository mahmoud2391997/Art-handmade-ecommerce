import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  const location = useLocation();
  const noLayout = ["./register", "/login", "/notfound"];
  const showLayout = !noLayout.includes(location.pathname);

  return (
    <div>
      {showLayout && <Header />}
      <Outlet />
      {showLayout && <Footer />}
    </div>
  );
}
