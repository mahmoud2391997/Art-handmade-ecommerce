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
import Cart from "./pages/Cart";
import "./App.css";

const router = createBrowserRouter([
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  { path: "notfound", element: <NotFound /> },
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetails /> },
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
