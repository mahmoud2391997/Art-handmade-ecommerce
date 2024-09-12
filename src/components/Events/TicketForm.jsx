import React, { useState } from "react";
import { DialogBody, DialogHeader } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loadStorage from "../../helpers/Storage";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";



const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone_number: yup
      .string()
      .required("Phone Number is required")
      .min(10, "Phone Number must be at least 10 digits long")
      .max(15, "Phone Number cannot exceed 15 digits"),
  email: yup
    .string()
    .email("Email must be a valid email address")
    .required("Email is required"),
});


export default function TicketForm({ eventId, onClose }) {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset,} = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data)
    if (isSubmitting) return;
    setIsSubmitting(true);

    const token = loadStorage();
    console.log("Retrieved token:", token);

    if (!token) {
      console.log("No token found, redirecting to login.");
      navigate("/login");
      setIsSubmitting(false);
      return;
    }

    const clientInfo = {  
      name: data.name,  
      email: data.email,  
      phone_number: data.phone_number,  
    }; 

    try {
      await axios.post(
        `https://art-ecommerce-server.glitch.me/api/ticket/${eventId}`,
        clientInfo,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Form submitted successfully");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <div className="p-3">
      <DialogHeader className="text-2xl font-semibold uppercase font-eb-garamond">
        Ticket Form
      </DialogHeader>
      <DialogBody>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name")}
              className={`w-full border-b border-gray-400 p-2 placeholder-gray-500 font-eb-garamond ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              {...register("phone_number")}
              className={`w-full border-b border-gray-400 p-2 placeholder-gray-500 font-eb-garamond ${
                errors.phone_number ? "border-red-500" : ""
              }`}
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm">
                {errors.phone_number.message}
              </p>
            )}
          </div>
          <div className="mb-8">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              {...register("email")}
              className={`w-full border-b border-gray-400 p-2 placeholder-gray-500 font-eb-garamond ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4 font-eb-garamond">
              Cancel
            </button>
            <button
              type="submit"
              className="text-main font-bold font-eb-garamond"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </DialogBody>
    </div>
  );
}
