import "./App.css";
import NavBar from "./components/Shared/Navbar/NavBar";
import ShopList from "./pages/ShopList";
import ShopSingle from "./pages/ShopSingle";

function App() {
  return (
    <>
      <NavBar />
      <ShopList />
      {/* <ShopSingle /> */}
    </>
  );
}

export default App;
