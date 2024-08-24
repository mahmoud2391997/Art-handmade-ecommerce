import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "./button/MainButton";
export default function ProductCard() {
  return (
    <div className="xl:w-[253px] w-56 h-[350px] xl:h-[400px] p-4 mb-7">
      <div className="xl:w-[236px] w-48 h-48 xl:h-[236px]">
        <img src="https://musea.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-5-600x600.jpg" />
      </div>
      <div className="xl:w-[236px] w-48 h-24 xl:h-[124px] flex flex-col items-center justify-around">
        <h5 className="text-2xl leading-5 tracking-[0.16em]">Lorem, ipsum.</h5>
        <div className="w-2/3 flex justify-center">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="w-full tracking-[0.16em] leading-5 text-2xl text-center">
          <span className="">57 $</span>
        </div>
      </div>
      <div className="m-auto w-40 flex justify-center ">
        <MainButton title={"Add To Cart"} />
      </div>
    </div>
  );
}
