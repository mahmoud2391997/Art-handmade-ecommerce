export default function CategoryItem({ category }) {
  return (
    <div  className="lg:h-[430px] m-auto w-[90%]   flex flex-col  items-center ">
      <img
        src={category.categoryImage}
        className="md:w-full w-full h-[350px]"
      />
      <div className="xl:w-[236px] w-48 h-20  flex flex-col items-center justify-around">
        <h5 className="text-2xl leading-5 tracking-[0.16em]">
          {category.categoryName}
        </h5>

        {/* <div className="w-full tracking-[0.16em] leading-5 text-lg text-center">
          <span className="">Lorem</span>
        </div> */}
      </div>
    </div>
  );
}
