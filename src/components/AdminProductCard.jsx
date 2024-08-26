import { faEdit, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "./button/MainButton";
export default function AdminProductCard() {
  return (
    <div className="xl:w-[253px] w-full sm:w-56 h-[350px] xl:h-[400px] p-4 mb-7 flex flex-col m-auto items-center">
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
          <FontAwesomeIcon icon={faStar} className="text-[#c9ab81]" />
          <FontAwesomeIcon icon={faStar} className="text-[#c9ab81]" />
          <FontAwesomeIcon icon={faStar} className="text-[#c9ab81]" />
          <FontAwesomeIcon icon={faStar} className="text-[#c9ab81]" />
          <FontAwesomeIcon icon={faStar} className="text-[#c9ab81]" />
        </div>
        <div className="w-full tracking-[0.16em] leading-5 sm:text-2xl text-base text-center">
          <span className="">57 $</span>
        </div>
      </div>
      <div className="m-auto w-40 flex  justify-between ">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </a>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
