import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/login/Login";
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
import SignUp from "./pages/signup/SignUp";

const router = createBrowserRouter([
  // { path: "register", element: <Register /> },
  { path: "signup", element: <SignUp /> },
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
