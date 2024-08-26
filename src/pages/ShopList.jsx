import { Option, Select, Typography } from "@material-tailwind/react";
import React from "react";
import PageTitle from "../components/Shared/PageTitle";
import SearchInput from "../components/SearchInput";
import RangeSlider from "../components/RangeSlider";
import CategoriesCheckbox from "../components/CategoriesCheckBox";
import TagsFilter from "../components/TagsFilter";
import ProductCard from "../components/CustomerProductCard";

export default function ShopList() {
  return (
    <div className="z-40 pb-[200px] relative bg-white">
      <PageTitle title={"shop"} />
      <div className="flex justify-center items-start gap-10 mx-28 my-32">
        <div className="w-2/3 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div
              className="capitalize text-[17px]"
              style={{ fontFamily: "var(--third-font)" }}
            >
              showing 1-12 of 15 result
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
            <div className="p-10 max-h-screen">
              <ProductCard isRandom={false} /> {/* Pass isRandom as needed */}
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
