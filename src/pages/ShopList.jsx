import React, { useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";

import { Option, Select, Typography } from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";

import getCategories from "../api/categories";

import { debounce } from "../utils/debounce";

import PageTitle from "../components/Shared/PageTitle";
import SearchInput from "../components/SearchInput";
import RangeSlider from "../components/RangeSlider";
import CategoriesCheckbox from "../components/CategoriesCheckBox";
import TagsFilter from "../components/TagsFilter";
import ProductList from "../components/ProductListFinal";
import Pagination from "../components/Shared/Pagination";
import { fetchProductsAction } from "../Redux/actions/productActions";

export default function ShopList() {
  const [page, setPages] = useState(1);
  const dispatch = useDispatch();
  const { products, count, status, error } = useSelector(
    (state) => state.products
  );
  function getProductsPage(page) {
    dispatch(fetchProductsAction(page));
  }
  useEffect(() => {
    getProductsPage(page);
  }, []);
  /////////////الجزء دا عشان اول مافتح الصفحة يجبهالى من اول///////////////////
  /******* */ useEffect(() => {
    /******* */
    /******* */ window.scrollTo(0, 0); /******* */
    /******* */
  }, []); /******* */
  ///////////////////////////////////////////////////////////////////

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [value, setValue] = useState(1500);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [debouncedValue] = useDebounce(value, 300);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  //no use now but will be needed
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(1500);

  const filteredProducts = useMemo(() => {
    console.log(products);
    let sortedProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length > 0
          ? selectedCategories.some(
              (selectedCategory) => selectedCategory._id === product.categoryId
            )
          : true;

      const matchesPrice = product.price <= debouncedValue;
      // const matchesPrice = product.price >= minValue && product.price <= maxValue;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());

      return matchesCategory && matchesPrice && matchesSearch;
    });

    if (sortOption === "priceLowToHigh") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighToLow") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "nameAZ") {
      sortedProducts = sortedProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortOption === "nameZA") {
      sortedProducts = sortedProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return sortedProducts;
  }, [
    products,
    selectedCategories,
    debouncedValue,
    debouncedSearchTerm,
    sortOption,
  ]);

  console.log(filteredProducts);

  const productsPerPage = 6; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPages(pageNumber);
    if (pageNumber > page) {
      getProductsPage(pageNumber);
    }
  };

  const totalPages = Math.ceil(count / productsPerPage);

  const handleSearchChange = debounce((term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, 300);

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  useEffect(() => {
    getCategories({ setCategories });
  }, []);

  return (
    <div className="z-40  relative bg-white">
      <PageTitle title={"shop"} />
      <div className="flex justify-center items-start gap-10 mx-28 my-32">
        {status == "idle" ? (
          <div className="w-full h-[19.8vh] flex flex-col items-center">
            <div className="w-[75%] h-[40%] flex items-center justify-center m-auto border-2 border-[var(--main-color)]">
              <h1
                className="md:text-xl lg:text-2xl font-medium text-lg text-center text-[var(--main-gray)]"
                style={{
                  fontFamily: "var(--main-font)",
                  letterSpacing: ".16em",
                  lineHeight: "1.31em",
                }}
              >
                Loading
              </h1>
            </div>
          </div>
        ) : currentProducts.length == 0 ? (
          <div className="w-full h-[19.8vh] flex flex-col items-center">
            <div className="w-[75%] h-[40%] flex items-center justify-center m-auto border-2 border-[var(--main-color)]">
              <h1
                className="md:text-xl lg:text-2xl font-medium text-lg text-center text-[var(--main-gray)]"
                style={{
                  fontFamily: "var(--main-font)",
                  letterSpacing: ".16em",
                  lineHeight: "1.31em",
                }}
              >
                No Products Found
              </h1>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center flex-wrap mb-4">
              <div
                className="capitalize text-[17px] text-[var(--main-gray)]"
                style={{ fontFamily: "var(--third-font)" }}
              >
                showing {indexOfFirstProduct + 1} -
                {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} results
              </div>
              <div>
                <Select
                  variant="standard"
                  label="Sort"
                  on
                  onChange={(e) => handleSortChange(e)}
                >
                  <Option value="default">default</Option>
                  <Option value="priceLowToHigh">price: low to high</Option>
                  <Option value="priceHighToLow">price: high to low</Option>
                  <Option value="nameAZ">a-z</Option>
                  <Option value="nameZA">z-a</Option>
                </Select>
              </div>
            </div>
            <div className="p-10 min-h-fit">
              <ProductList currentProducts={currentProducts} />
            </div>
            <div className="flex justify-center items-start mt-4">
              {/* Pagination Controls */}
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        )}
        <div className="w-1/3 flex flex-col gap-4">
          <SearchInput onChange={(e) => handleSearchChange(e.target.value)} />
          <Typography
            className="uppercase text-[22px] text-[var(--main-gray)] -mb-4"
            style={{
              fontFamily: "var(--main-font)",
              letterSpacing: ".16em",
              lineHeight: "1.31em",
            }}
          >
            filter
          </Typography>
          <div className="w-full h-5 border-l-[1px] border-r-[1px] border-[var(--main-gray)] flex justify-center items-center mb-4">
            <div className="w-full h-[1px] bg-[var(--main-gray)]" />
          </div>
          <RangeSlider
            value={value}
            setValue={setValue}
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
          />
          <CategoriesCheckbox
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            categories={categories}
          />
          {/* <TagsFilter /> */}
        </div>
      </div>
    </div>
  );
}

{
  /* {currentProducts.map((product, index) => (
              <div key={index}>
                <SingleProductCard prod={product} isRandom={false} />
              </div>
            ))} */
}
{
  /* Pass isRandom as needed */
}
{
  /* <ProductCard isRandom={false} /> */
}

{
  /* <Button
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
            </Button> */
}
