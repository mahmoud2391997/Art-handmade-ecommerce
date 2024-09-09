import React, { useState } from "react";
import { DialogBody, DialogHeader } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loadStorage from "../../helpers/Storage";

export default function TicketForm({ eventId, onClose }) {
  const [clientInfo, setClientInfo] = useState({
    name: "",
    phone_number: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const handleSubmit = async () => {
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
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      onClose();
      setClientInfo({ name: "", phone_number: "", email: "" });
    }
  };

  return (
    <div className="p-3">
      <DialogHeader className="text-2xl font-semibold uppercase font-eb-garamond">
        Ticket Form
      </DialogHeader>
      <DialogBody>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={clientInfo.name}
          onChange={handleInputChange}
          className="w-full border-b border-gray-400 p-2 placeholder-gray-500 mb-4 font-eb-garamond"
        />
        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          value={clientInfo.phone_number}
          onChange={handleInputChange}
          className="w-full border-b border-gray-400 p-2 placeholder-gray-500 mb-4 font-eb-garamond"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={clientInfo.email}
          onChange={handleInputChange}
          className="w-full border-b border-gray-400 p-2 placeholder-gray-500 mb-8 font-eb-garamond"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-4 font-eb-garamond">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="text-main font-bold font-eb-garamond"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </DialogBody>
    </div>
  );
}
