// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StaticStarRating from "./StaticStarRating";
import MainButton from "./MainButton";
export default function ProductCard() {
  return (
    <div className="xl:w-[253px] w-full sm:w-56 h-[350px] xl:h-[400px] p-4 mb-7 flex flex-col items-center">
      <div className="xl:w-[236px] w-[236px] h-[236px] sm:w-48 sm:h-48 xl:h-[236px]">
        <img
          src="https://musea.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-5-600x600.jpg"
          className=" h-full m-auto w-[236px]"
        />
      </div>
      <div className="xl:w-[236px] w-full sm:w-56 h-24 xl:h-[124px] flex flex-col items-center justify-around">
        <h5 className="sm:text-2xl text-base font-bold leading-5 tracking-[0.16em]">
          Lorem, ipsum.
        </h5>
        <div className="w-2/3 flex justify-center">
          <StaticStarRating rating={3} />
        </div>
        <div className="w-full tracking-[0.16em] leading-5 sm:text-2xl text-base text-center">
          <span className="">57 $</span>
        </div>
      </div>
      <div className="m-auto w-40 flex justify-center ">
        <MainButton title={"Add To Cart"} />
      </div>
    </div>
  );
}
