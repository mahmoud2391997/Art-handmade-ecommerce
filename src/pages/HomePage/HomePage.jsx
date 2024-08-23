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
    <div className="w-full z-0 bg-white">
      <section className="w-full h-screen bg-cover bg-no-repeat landing flex items-center">
        <div className="m-auto w-full ">
          <Title
            title={"ART AND HANDMADE"}
            subTitle={"HELLO AND WELCOME"}
            color={"white"}
          />
        </div>
      </section>
      <div className="my-20">
        <Title title={"MAIN CATEGORIES"} subTitle={"CHECK CATEGORIES"} />
        <section className="w-4/6 m-auto justify-between flex mt-20">
          <CategoryItem></CategoryItem>
          <CategoryItem></CategoryItem>
          <CategoryItem></CategoryItem>
        </section>
      </div>
      <div className="my-20">
        <Title title={"UPCOMING EVENT"} subTitle={"CHECK TEICKETS"} />
        <section className="w-4/6 h-[675px] m-auto justify-between flex mt-20 bg-cover bg-no-repeat relative landing">
          <div
            className="w-5/6 z-10 flex flex-row justify-between m-auto absolute bottom-8 left-24 items-end
          "
          >
            <div className="h-40 flex flex-col justify-between w-2/5 ">
              <span className="text-base font-thin text-white">
                Upcoming Event
              </span>
              <h2 className="text-5xl text-white leading-5 tracking-[0.16em]">
                Discover Art
              </h2>
              <MainButton title={"View More"} color={"white"} />
            </div>
            <div className="bg-white h-80 w-92 p-5 flex flex-col justify-between">
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl leading-5 tracking-[0.16em] mb-3">
                  <FontAwesomeIcon className="mr-4" icon={faClock} />
                  OPENING HOURS
                </h3>
                <div className="flex flex-col justify-between ml-10">
                  <p>Tue ‒ Thu: 09am ‒ 07pm</p>
                  <p>Fri ‒ Mon: 09am ‒ 05pm</p>
                </div>
              </div>
              <div className="h-20 flex flex-col justify-between">
                <h3 className="text-2xl leading-5 tracking-[0.16em] mb-3">
                  <FontAwesomeIcon className="mr-4" icon={faLocationDot} />
                  FIND US
                </h3>
                <div className="flex flex-col justify-between ml-10">
                  <p>673 12 Constitution Lane Massillon</p>
                  <p>781-562-9355, 781-727-6090</p>
                </div>
              </div>
              <MainButton title={"Buy A Ticket"} color={"black"} />
            </div>
          </div>
        </section>
      </div>
      <div className="my-20">
        <Title title={"BESTSELLERS"} subTitle={"PRODUCTS"} />
        <section className="w-5/6 m-auto justify-between flex mt-20">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </section>
      </div>
    </div>
  );
}
