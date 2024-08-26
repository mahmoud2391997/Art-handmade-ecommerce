import StaticStarRating from "../components/staticStarRating";
import MainButton from "./MainButton";

export default function ProductCard() {
  return (
    <div className="relative xl:w-[253px] w-full sm:w-56 h-[350px] xl:h-[400px] p-4 mb-7 flex flex-col items-center group">
      <div className="xl:w-[236px] w-[236px] h-[236px] sm:w-48 sm:h-48 xl:h-[236px] mb-4 relative overflow-hidden">
        <img
          src="https://musea.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-5-600x600.jpg"
          className="h-full m-auto w-[236px] object-cover"
          alt="Product"
        />

        <div className="absolute top-3 left-3 right-3 bottom-3 bg-white bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-full transition-transform duration-[2000ms] ease-in-out group-hover:translate-x-0">
          <MainButton
            title="Add To Cart"
            className="items-center justify-center flex"
          />
        </div>
      </div>
      <div className="xl:w-[236px] w-full sm:w-56 h-24 xl:h-[124px] flex flex-col items-center justify-around">
        <h5 className="sm:text-xl font-eb-garamond text-base leading-5 tracking-[0.14em]">
          Lorem, ipsum.
        </h5>
        <div className="w-2/3 flex justify-center">
          <StaticStarRating rating={3} />
        </div>
        <div className="w-full tracking-[0.16em] leading-5 sm:text-l text-base text-center">
          <span>57 $</span>
        </div>
      </div>
    </div>
  );
}
