import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";

//components
import Layout from "./components/Layout/Layout";
import EventDetails from "./pages/EventDetails";
import Cart from "./pages/Cart/Cart";
import "./App.css";
import ShopList from "./pages/ShopList";
import ShopSingle from "./pages/ShopSingle";
import InputCard from "./components/InputCard/InputCard";
import Profile from "./pages/Profile/Profile";
import OrderHistory from "./pages/OrderHistory/OrderHistory";

const router = createBrowserRouter([
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  { path: "notfound", element: <NotFound /> },
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <ShopList /> },
      { path: "products/:productId", element: <ShopSingle /> },
      { path: "events", element: <Events /> },
      { path: "events/:eventId", element: <EventDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <Contact /> },
      { path: "checkout", element: <Checkout /> },
      { path: "profile", element: <Profile /> },
      { path: "orderhistory", element: <OrderHistory /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
