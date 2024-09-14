import { useEffect, useState } from "react";
import "../HomePage/Landing.css";
import MainButton from "../../components/button/MainButton";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title";
import AdminProductCard from "../../components/AdminProductCard";
import ProductCard from "../../components/CustomerProductCard";
import axios from "axios";
import CategoryItem from "../../components/CategoryItem";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [categories, setCategories] = useState([]);
  function getCategories() {
    axios
      .get("https://art-ecommerce-server.glitch.me/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        throw error
      });
  }
  useEffect(() => {
    getCategories();
  }, []);
  /////////////الجزء دا عشان اول مافتح الصفحة يجبهالى من اول///////////////////
  /******* */ useEffect(() => {
    /******* */
    /******* */ window.scrollTo(0, 0); /******* */
    /******* */
  }, []); /******* */
  ///////////////////////////////////////////////////////////////////
  return (
    <div className="w-full z-40 pb-[200px] relative bg-white font-eb-garamond">
      <section className="w-full max-w-screen h-screen bg-cover bg-no-repeat landing flex items-center">
        <div className=" w-full">
          <Title
            title={"ART & HANDMADE"}
            subTitle={"HELLO AND WELCOME"}
            color={"white"}
          />
        </div>
      </section>
      <div className="my-20">
        <Title title={"MAIN CATEGORIES"} subTitle={"CHECK CATEGORIES"} />
        <section className="w-5/6 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid mt-20">
          {categories.slice(0, 4).map((category) => {
            return <CategoryItem category={category} />;
          })}
        </section>
     <div className="m-auto w-40 mt-5">
      <Link to="/products">
         <MainButton title={"Products List"}/>
      </Link>
      
      </div>
      </div>
      <div className="my-20">
        <Title title={"UPCOMING EVENT"} subTitle={"CHECK TICKETS"} />
        <section className="w-4/6 h-[675px] m-auto justify-center items-end flex mt-20 bg-cover bg-no-repeat  event-Landing">
          <div
            className="w-[90%] h-[90%] z-10 flex lg:flex-row flex-col justify-between items-start lg:items-end mb-8 sm:h-[80%]
          "
          >
            <div className="h-40 flex flex-col justify-between lg:w-4/5 w-full ">
              <span className="text-base font-thin text-white">
                Upcoming Event
              </span>
              <div className="sm:text-5xl text-2xl text-white leading-8 tracking-[0.16em]  ">
                Explore Art Exhibitions
              </div>
              <Link to={"/events"}>
              <MainButton title={"View More"} color={"white"} />
              </Link>
            </div>
            
          </div>
        </section>
      </div>
      <div className="my-20 w-full flex flex-col items-center">
        <div className="w-full">
          <Title title={"BESTSELLERS"} subTitle={"PRODUCTS"} />
        </div>
        <section className="w-5/6 lg:min-w-[940px] xl:min-w-[1012px]">
          <ProductCard />
        </section>
      </div>
    </div>
  );
}
