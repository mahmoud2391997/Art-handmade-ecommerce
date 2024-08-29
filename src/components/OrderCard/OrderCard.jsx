export default function OrderCard() {
  return (
    <div className="border p-[1px] border-[var(--main-color)] sm:bg-[var(--main-color)] m-auto  w-[200px] items-center sm:flex-row flex-col min-w-[150px] h-[350px]  flex justify-between sm:items-start sm:w-full sm:h-[153px]  ">
      <div className="sm:min-w-[150px] sm:max-w-[150px] w-[200px] h-[200px]   sm:min-h-[150px]  sm:max-h-[150px]">
        <img
          src="https://musea.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-14.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="w-full bg-white sm:px-6  flex flex-col justify-evenly items-start h-[200px] sm:h-[150px]">
        <h3 className="md:text-xl dark:text-white  mt-0 flex flex-col md:flex-row font-semibold leading-6 text-gray-800">
          <span>Product:</span>

          <span>asdas dasdasd sdfdsfs dfdsfsd</span>
        </h3>
        <p className="md:text-lg mt-0 dark:text-white xl:text-lg leading-6 sm:ml-8 sm:m-0">
          Price: 12312
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-0 w-full ">
          <p className="md:text-lg  dark:text-white xl:text-lg leading-6 text-gray-800 ">
            Quantity: x12
          </p>
          <p className="md:text-lg dark:text-white xl:text-lg font-semibold leading-6 text-gray-800 ">
            Subtotal: 123123
          </p>
        </div>
      </div>
    </div>
  );
}
