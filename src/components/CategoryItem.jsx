export default function CategoryItem() {
  return (
    <div className="h-[700px] w-[413px] flex flex-col items-center mx-5">
      <img
        src="https://musea.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-14.jpg"
        className="w-full h-[610px]"
      />
      <div className="xl:w-[236px] w-48 h-24 xl:h-[100px] flex flex-col items-center justify-around">
        <h5 className="text-2xl leading-5 tracking-[0.16em]">Lorem, ipsum.</h5>

        <div className="w-full tracking-[0.16em] leading-5 text-lg text-center">
          <span className="">Lorem</span>
        </div>
      </div>
    </div>
  );
}
