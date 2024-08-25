import { useEffect, useState } from "react";
import "../HomePage/Landing.css";
import CategoryItem from "../../components/categoryItem";
import ProductCard from "../../components/ProductCard";
import MainButton from "../../components/button/MainButton";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title";
export default function HomePage() {
  const bgImages = [
    "https://musea.qodeinteractive.com/wp-content/uploads/2019/10/02-min.jpg",
    "https://files.ocula.com/anzax/10/10d60b81-dde0-44ea-8888-e003eb664425_2000_1333.jpg",
    "https://images.squarespace-cdn.com/content/v1/6568f6c2f926614e3d0da73a/ddf76aa6-d43f-4cc4-8672-19954acb4a10/230613-Mars-Landing-web-ready-9.jpg?format=2500w",
  ];
  const [bg, setBg] = useState(
    "https://musea.qodeinteractive.com/wp-content/uploads/2019/10/02-min.jpg"
  );
  useEffect(() => {
    changeBGImage();
  }, [bg]);
  function changeBGImage() {
    setTimeout(() => {
      setBg((prev) =>
        bgImages.indexOf(prev) + 1 == bgImages.length
          ? bgImages[0]
          : bgImages[bgImages.indexOf(prev) + 1]
      );
    }, 4000);
  }
  return (
    <div className="w-full z-40 pb-[200px] relative bg-white">
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
        <section className="w-4/6 gap-6 m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid mt-20">
          <CategoryItem></CategoryItem>
          <CategoryItem></CategoryItem>
          <CategoryItem></CategoryItem>
        </section>
      </div>
      <div className="my-20">
        <Title title={"UPCOMING EVENT"} subTitle={"CHECK TICKETS"} />
        <section className="w-4/6 h-[675px] m-auto justify-center items-end flex mt-20 bg-cover bg-no-repeat  landing">
          <div
            className="w-[90%] h-[90%] z-10 flex lg:flex-row flex-col justify-between items-start lg:items-end mb-8 sm:h-[80%]
          "
          >
            <div className="h-40 flex flex-col justify-between lg:w-2/5 w-full ">
              <span className="text-base font-thin text-white">
                Upcoming Event
              </span>
              <div className="sm:text-5xl text-2xl text-white leading-8 tracking-[0.16em]  ">
                Discover Art
              </div>
              <MainButton title={"View More"} color={"white"} />
            </div>
            <div className="bg-white h-[400px] sm:h-80 w-full sm:w-[330px] p-5 flex flex-col justify-between">
              <div className="flex flex-col justify-between">
                <h3 className="sm:text-2xl text-base leading-5 tracking-[0.16em] mb-3">
                  <FontAwesomeIcon className="mr-4" icon={faClock} />
                  OPENING HOURS
                </h3>
                <div className="flex flex-col justify-between sm:ml-10">
                  <p>Tue ‒ Thu: 09am ‒ 07pm</p>
                  <p>Fri ‒ Mon: 09am ‒ 05pm</p>
                </div>
              </div>
              <div className="h-20 flex flex-col justify-between">
                <h3 className="sm:text-2xl text-base leading-5 tracking-[0.16em] mb-3">
                  <FontAwesomeIcon className="mr-4" icon={faLocationDot} />
                  FIND US
                </h3>
                <div className="flex flex-col justify-between sm:ml-10">
                  <p>673 12 Constitution Lane Massillon</p>
                  <p>781-562-9355, 781-727-6090</p>
                </div>
              </div>
              <MainButton title={"Buy A Ticket"} color={"black"} />
            </div>
          </div>
        </section>
      </div>
      <div className="my-20 w-full flex flex-col items-center">
        <div className="w-full">
          <Title title={"BESTSELLERS"} subTitle={"PRODUCTS"} />
        </div>
        <section className="w-5/6 lg:min-w-[940px] xl:min-w-[1012px]  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-20">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </section>
      </div>
    </div>
  );
}
