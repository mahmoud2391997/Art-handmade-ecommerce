import { Option, Select, Typography } from "@material-tailwind/react";
import React from "react";
import PageTitle from "../components/Shared/PageTitle";

export default function ShopList() {
  return (
    <div>
      <PageTitle title={"shop"} />
      <div className="flex justify-center items-center bg-gray-600 gap-4 mx-28 my-32">
        <div className="w-2/3 bg-gray-500 flex flex-col mt-5 ">
          <div className="flex justify-between items-center ">
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
        </div>
        <div className="w-1/3 bg-gray-400">right</div>
      </div>
    </div>
  );
}
