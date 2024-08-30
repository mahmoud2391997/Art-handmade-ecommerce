import OrderCard from "../../components/OrderCard/OrderCard";
import PageTitle from "../../components/Shared/PageTitle";

export default function OrderHistory() {
  return (
    <div className="w-full h-auto z-40 relative pb-[200px] bg-white">
      <PageTitle title={"Orders History"} />
      <div className="my-10 border-2 md:p-10 w-[90%] m-auto text-[var(--main-gray)] border-gray-300 font-eb-garamond">
        <div className="grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 px-4 py-4 md:py-6 md:p-6 xl:p-8 space-y-2 sm:h-[8rem] h-auto w-full">
          <div className="w-full flex flex-col justify-between mt-2 text-center h-full">
            <span className="text-lg">Order Number</span>
            <span className="text-3xl text-black font-bold">asdasd</span>
          </div>
          <div className="w-full flex flex-col justify-between text-center h-full">
            <span className="text-lg">Order Date</span>
            <span className="text-3xl text-black font-bold">asdasd</span>
          </div>
          <div className="w-full flex flex-col justify-between text-center h-full">
            <span className="text-lg">Order Status</span>
            <span className="text-3xl text-black font-bold">asdasd</span>
          </div>
          <div className="w-full flex flex-col justify-between text-center h-full">
            <span className="text-lg">Payment Method</span>
            <span className="text-3xl text-black font-bold">asdasd</span>
          </div>
        </div>
        <div className="mt-20 flex flex-col xl:flex-row jusitfy-center items-stretch w-full ">
          <div className="sm:px-5 md:min-w-[600px] md:w-1/2 w-full flex flex-col justify-start items-start  ">
            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 sm:px-4 sm:py-4 w-full">
              <p className="text-3xl m-auto sm:m-0 md:text-xl text-center dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Order Items
              </p>

              <div className="mt-4 w-full  h-auto  md:mt-6 grid grid-cols-1 gap-5  justify-start items-start md:items-center  ">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 my-10 sm:m-0  w-full max-h-96 md:mt-12">
            <table className=" w-3/4 m-auto h-full  text-3xl">
              <tbody className="h-full flex flex-col justify-between">
                <tr className="border-b w-full  h-1/4 flex justify-between border-[var(--main-color)]">
                  <td>price</td>
                  <td>123321</td>
                </tr>
                <tr className="border-b h-1/4 border-[var(--main-color)] w-full flex justify-between">
                  <td>shipping</td>
                  <td>{"20$"}</td>
                </tr>
                <tr className="border-b h-1/4 border-[var(--main-color)] w-full  flex justify-between">
                  <td>total</td>
                  <td>{20 + "$"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
