import React, { useState, useEffect } from "react";
import { Input, Textarea } from "@material-tailwind/react";
import { countries, cities } from "./countriesAndCitiesData";
import DropDown from "./Icons/DropDown";
import CheckOutCart from "./CheckOutCart";
import MainButton from "../MainButton/MainButton";
import ChekoutTitle from "../CheckOut/CheckoutTitle";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

export default function CheckoutComp() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");


  //react-hook-form

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phone: yup.
    string().
    required("Phone Number is required")
    .matches(/^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/, "Invalid phone number format"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    company: yup.string(),
    country: yup.string().required("Country is required"),
    city: yup.string(),
    postCode: yup.string().required("Zip Code is required"),
    paymentMethod: yup.string().required("Payment Method is required"),
    notes: yup.string()
  })

  const { register, handleSubmit} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  useEffect(() => {
    if (country && cities[country]) {
      setCityOptions(cities[country]);
    } else {
      setCityOptions([]);
    }
  }, [country]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setCity("");
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="relative z-40 bg-white">
      <ChekoutTitle />
      <div className="p-8 max-w-7xl mx-auto mt-10 font-eb-garamond text-gray-700">
        <h2 className="text-2xl font-semibold mb-10 uppercase">Billing Details</h2>
        <form >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Form Fields Column */}
            <div>
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex flex-col md:flex-row md:gap-8">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500 placeholder-opacity-100"
                    variant="standard"
                    {...register("firstName")}
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500 placeholder-opacity-100"
                    variant="standard"
                    {...register("lastName")}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Phone"
                  className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500 placeholder-opacity-100"
                  variant="standard"
                  {...register("phone")}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500 placeholder-opacity-100"
                  variant="standard"
                  {...register("email")}
                />
                <Input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500 placeholder-opacity-100"
                  variant="standard"
                  {...register("company")}
                />
                <div className="relative mb-8">
                  <select
                    value={country}
                    onChange={handleCountryChange}
                    className="w-full border-b border-gray-400 p-2 focus:outline-none pr-10 appearance-none bg-transparent placeholder-gray-500 placeholder-opacity-100"
                    {...register("country")}
                  >
                    <option value="" disabled>Select Country / Region</option>
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
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border-b border-gray-400 p-2 focus:outline-none pr-10 appearance-none bg-transparent placeholder-gray-500 placeholder-opacity-100"
                    disabled={!country}
                    {...register("city")}
                  >
                    <option value="" disabled>Select Town / City</option>
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
                <Input
                  type="text"
                  placeholder="Postcode/ZIP"
                  className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500 placeholder-opacity-100"
                  variant="standard"
                  {...register("postCode")}
                />
                <Textarea
                  placeholder="Order Notes (Optional)"
                  className="w-full border-b border-gray-400 p-2 focus:outline-none placeholder-gray-500 placeholder-opacity-100"
                  variant="standard"
                  {...register("notes")}
                />
                <div className="mb-8">
                  <ul className="list-none p-0">
                    <li className="mb-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="direct-bank-transfer"
                          checked={paymentMethod === "direct-bank-transfer"}
                          onChange={handlePaymentChange}
                          className="mr-2 accent-blue-500 placeholder-gray-500"
                          {...register("paymentMethode")}
                        />
                        Direct Bank Transfer
                      </label>
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
                          name="payment"
                          value="cash-on-delivery"
                          checked={paymentMethod === "cash-on-delivery"}
                          onChange={handlePaymentChange}
                          className="mr-2 accent-blue-500 placeholder-gray-500"
                          {...register("paymentMethode")}
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
          <MainButton title="Place Order" onClick={handleSubmit(onSubmit)} />
        </form>
      </div>
    </div>
  );
}
