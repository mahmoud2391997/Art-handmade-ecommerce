import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Navbar/NavBar"
import Footer from "./Footer/Footer";
import '../../App.css'

export default function Layout() {

    const location = useLocation();
    const noLayout = ['./register', '/login', '/notfound']
    const showLayout = !noLayout.includes(location.pathname)

  return (
    <div className="relative  flex-col min-h-screen">
        {showLayout && <NavBar />}
        
            <Outlet />
           
        {showLayout && <Footer />}
        
    </div>
  )
}
