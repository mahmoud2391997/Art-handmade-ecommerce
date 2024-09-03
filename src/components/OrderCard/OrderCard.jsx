export default function OrderCard({ item }) {
  return (
    <div className="border p-[1px] border-[var(--main-color)] sm:bg-[var(--main-color)] m-auto  w-[200px] items-center sm:flex-row flex-col min-w-[150px] h-[350px]  flex justify-between sm:items-start sm:w-full sm:h-[153px]  ">
      <div className="sm:min-w-[150px] sm:max-w-[150px] w-[200px] h-[200px]   sm:min-h-[150px]  sm:max-h-[150px]">
        <img
          src={
            item.productImage
              ? item.productImage
              : "https://musea.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-14.jpg"
          }
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="w-full bg-white sm:px-6  flex flex-col justify-evenly items-start h-[200px] sm:h-[150px]">
        <h3 className="md:text-xl dark:text-white  mt-0 flex flex-col md:flex-row font-semibold leading-6 text-gray-800">
          <span>Product:</span>

          <span className="ml-1">{item.productName}</span>
        </h3>
        <p className="md:text-lg mt-0 dark:text-white xl:text-lg leading-6  sm:m-0">
          Price: {item.productPrice} $
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-0 w-full ">
          <p className="md:text-lg  dark:text-white xl:text-lg leading-6 text-gray-800 ">
            Quantity: x{item.productQuantity}
          </p>
          <p className="md:text-lg dark:text-white xl:text-lg font-semibold leading-6 text-gray-800 ">
            Subtotal: {item.productSubtotal} $
          </p>
        </div>
      </div>
    </div>
  );
}
