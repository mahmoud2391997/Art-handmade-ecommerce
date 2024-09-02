import { Button, Option, Select, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import PageTitle from "../components/Shared/PageTitle";
import SearchInput from "../components/SearchInput";
import RangeSlider from "../components/RangeSlider";
import CategoriesCheckbox from "../components/CategoriesCheckBox";
import TagsFilter from "../components/TagsFilter";
import ProductCard from "../components/CustomerProductCard";
import { useSelector } from "react-redux";
import SingleProductCard from "../components/Shared/SingleProductCard";
import LeftIcon from "../components/icons/LeftIcon";
import RightIcon from "../components/icons/RightIcon";
import ProductList from "../components/ProductListFinal";
import Pagination from "../components/Shared/Pagination";

export default function ShopList() {
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const productsPerPage = 6; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="z-40  relative bg-white">
      <PageTitle title={"shop"} />
      <div className="flex justify-center items-start gap-10 mx-28 my-32">
        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center flex-wrap mb-4">
            <div
              className="capitalize text-[17px] text-[var(--main-gray)]"
              style={{ fontFamily: "var(--third-font)" }}
            >
              showing {indexOfFirstProduct + 1} -
              {Math.min(indexOfLastProduct, products.length)} of{" "}
              {products.length} results
              {/* showing 1-12 of {products.length} */}
            </div>
            <div>
              <Select variant="standard" label="Sort">
                <Option>price: low to high</Option>
                <Option>price: high to low</Option>
                <Option>a-z</Option>
                <Option>z-a</Option>
              </Select>
            </div>
          </div>
          <div className="p-10 min-h-fit">
            {/* {currentProducts.map((product, index) => (
              <div key={index}>
                <SingleProductCard prod={product} isRandom={false} />
              </div>
            ))} */}
            {/* Pass isRandom as needed */}
            {/* <ProductCard isRandom={false} /> */}
            <ProductList isRandom={false} currentProducts={currentProducts} />
          </div>
          <div className="flex justify-center items-start mt-4">
            {/* Pagination Controls */}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
            {/* <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 bg-transparent shadow-none hover:shadow-none transition-all duration-500 ease-in-out text-[var(--main-gray)] hover:text-[var(--main-color)]"
            >
              <LeftIcon />
            </Button>
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={
                  currentPage === index + 1
                    ? "underline text-sm px-3 bg-transparent shadow-none hover:shadow-none transition-all duration-500 ease-in-out text-[var(--main-color)]"
                    : "text-xs px-2 bg-transparent shadow-none hover:shadow-none transition-all duration-500 ease-in-out text-[var(--main-gray)] hover:text-[var(--main-color)]"
                }
              >
                {index + 1}
              </Button>
            ))}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 bg-transparent shadow-none hover:shadow-none transition-all duration-500 ease-in-out text-[var(--main-gray)] hover:text-[var(--main-color)]"
            >
              <RightIcon />
            </Button> */}
          </div>
        </div>
        <div className="w-1/3 flex flex-col">
          <Typography
            className="uppercase text-[22px] text-[var(--main-gray)] mb-4"
            style={{
              fontFamily: "var(--main-font)",
              letterSpacing: ".16em",
              lineHeight: "1.31em",
            }}
          >
            filter
          </Typography>
          <div className="w-full h-5 border-l-[1px] border-r-[1px] border-[var(--main-gray)] flex justify-center items-center mb-10">
            <div className="w-full h-[1px] bg-[var(--main-gray)]" />
          </div>
          <RangeSlider />
          <CategoriesCheckbox />
          <TagsFilter />
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
