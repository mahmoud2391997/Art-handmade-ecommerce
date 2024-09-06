import React, { useState, useEffect } from "react";
import { Input, Textarea } from "@material-tailwind/react";
import { countries, cities } from "./countriesAndCitiesData";
import DropDown from "./Icons/DropDown";
import CheckOutCart from "./CheckOutCart";
import ChekoutTitle from "../CheckOut/CheckoutTitle";
import MainButton from "../Shared/MainButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function CheckoutComp() {
  const [cityOptions, setCityOptions] = useState([]);

  // React Hook Form Schema
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phone: yup
      .string()
      .required("Phone Number is required")
      .min(10, "Phone Number must be at least 10 digits long")
      .max(15, "Phone Number cannot exceed 15 digits"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    address: yup.string().required("Address is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    postcode: yup.string().required("Postcode is required"),
    paymentMethod: yup.string().required("Payment Method is required"),
    notes: yup.string(),
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const country = watch("country", "");
  const city = watch("city", "");
  const paymentMethod = watch("paymentMethod", "");

  const onSubmit = (data) => {
    console.log(data);
  };
  /////////////الجزء دا عشان اول مافتح الصفحة يجبهالى من اول///////////////////
  /******* */ useEffect(() => {
    /******* */
    /******* */ window.scrollTo(0, 0); /******* */
    /******* */
  }, []); 
  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (country && cities[country]) {
      setCityOptions(cities[country]);
    } else {
      setCityOptions([]);
    }
  }, [country]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setValue("country", selectedCountry);
    setValue("city", "");
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setValue("city", selectedCity);
  };

  const handlePaymentChange = (e) => {
    setValue("paymentMethod", e.target.value);
  };

  return (
    <div className="relative z-40 bg-white">
      <ChekoutTitle />
      <div className="p-8 max-w-7xl mx-auto mt-10 font-eb-garamond text-gray-700">
        <h2 className="text-2xl font-semibold mb-10 uppercase">
          Billing Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Form Fields Column */}
            <div>
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex flex-col gap-3 md:flex-row md:gap-8">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="w-30 border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500"
                      variant="standard"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="w-30 border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500"
                      variant="standard"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Phone"
                    className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500"
                    variant="standard"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500"
                    variant="standard"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Address (Street No./District)"
                    className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500"
                    variant="standard"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                <div className="relative mb-8">
                  <select
                    value={country}
                    onChange={handleCountryChange}
                    className="w-full border-b border-gray-400 p-2 focus:outline-none pr-10 appearance-none bg-transparent placeholder-gray-500"
                    {...register("country")}
                  >
                    <option value="" disabled>
                      Select Country / Region
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <DropDown />
                  </div>
                </div>
                <div className="relative mb-8">
                  <select
                    value={city}
                    onChange={handleCityChange}
                    className="w-full border-b border-gray-400 p-2 focus:outline-none pr-10 appearance-none bg-transparent placeholder-gray-500"
                    disabled={!country}
                    {...register("city")}
                  >
                    <option value="" disabled>
                      Select Town / City
                    </option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {country && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <DropDown />
                    </div>
                  )}
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Postcode/ZIP"
                    className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500"
                    variant="standard"
                    {...register("postcode")}
                  />
                  {errors.postcode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.postcode.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <Textarea
                    placeholder="Order Notes (Optional)"
                    className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500"
                    variant="standard"
                    {...register("notes")}
                  />
                </div>
                <div className="mb-8">
                  <ul className="list-none p-0">
                    <li className="mb-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="direct-bank-transfer"
                          onChange={handlePaymentChange}
                          className="mr-2"
                          {...register("paymentMethod")}
                        />
                        Direct Bank Transfer
                      </label>
                      {errors.paymentMethod && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.paymentMethod.message}
                        </p>
                      )}
                      {paymentMethod === "direct-bank-transfer" && (
                        <p className="mt-4 text-gray-700">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      )}
                    </li>
                    <li>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash-on-delivery"
                          onChange={handlePaymentChange}
                          className="mr-2"
                          {...register("paymentMethod")}
                        />
                        Cash on Delivery
                      </label>
                      {paymentMethod === "cash-on-delivery" && (
                        <p className="mt-4 text-gray-700">
                          Pay with cash upon delivery.
                        </p>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Order Summary Column */}
            <div>
              <CheckOutCart />
            </div>
          </div>
          <div className="flex justify-center mt-2 ">
            <MainButton
              title="Place Order"
              onClick={handleSubmit(onSubmit)}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
