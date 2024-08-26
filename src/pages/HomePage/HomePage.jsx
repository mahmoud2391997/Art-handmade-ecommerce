import { useEffect, useState } from "react";
import "../HomePage/Landing.css";
import CategoryItem from "../../components/CategoryItem";
import MainButton from "../../components/button/MainButton";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title";
import AdminProductCard from "../../components/AdminProductCard";
import ProductCard from "../../components/CustomerProductCard";

export default function HomePage() {
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
          <CategoryItem></CategoryItem>
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
        <section className="w-5/6 lg:min-w-[940px] xl:min-w-[1012px]">
          <ProductCard isRandom />
        </section>
      </div>
    </div>
  );
}
