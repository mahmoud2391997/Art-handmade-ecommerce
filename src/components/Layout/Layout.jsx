import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

export default function Layout() {

    const location = useLocation();
    const noLayout = ['./register', '/login', '/notfound']
    const showLayout = !noLayout.includes(location.pathname)

  return (
    <div className="relative z-40 pb-[500px] bg-white eb-garamond-font text-[#4e4e4e]">
        {showLayout && <NavBar />}
            <Outlet />
        {showLayout && <Footer />}
    </div>
  )
}