/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import Imgheader from "../../components/Imgheader";
import Title from "../../components/Title";
import MainButton from "../../components/MainButton";
import {  Carousel, Input, Textarea, Typography } from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";



export default function Contact() {
  // const navigate = useNavigate();
  
  const values = [
    {
      value: "673 12 Constitution Lane Massillon, 10002 New York City",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do se eiusmod temps esto incididun in ut labore et sa dolore si magna aliqua. Ut enim ad minim destro veniam, inant quis nostrud e exerci de tation ullamco laboris nisi ut sen aliquip ex ea commodo insa velit ut consequat duis aute irure do se dolor in reprehenderit in",
    },   
  ];

  
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  
  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    alert("Form submitted successfully!"); 
    // registerAuthentication(data, navigate);
  };

  return (
    <div className="relative pb-[500px] z-40 sm:w-full">
      <div className="bg-white pb-[50px] md:w-[100%] lg:w-[100%] sm:w-[100%] w-[100%]">
        {/* <Imgheader title={"Contact Us"} />
        <Title title={"get to us"} subTitle={"Contact Form"} /> */}
 <section
  className="w-full max-w-screen h-[82vh] bg-cover bg-bottom bg-no-repeat landing flex items-center"
>
  <div className="w-full">
    <Title title={"Contact us"} color={"white"} />
  </div>
</section>

<div className="items-center">
  <Title title={"get to us"} subTitle={"Contact form"}/>
</div>


<Carousel
  className="h-full"
  navigation={({ setActiveIndex, activeIndex, length }) => (
    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
      {new Array(length).fill("").map((_, i) => (
        <span
          key={i}
          className={`block h-1 cursor-pointer rounded-4xl transition-all content-[''] ${
            activeIndex === i
              ? "w-4 bg-[var(--main-color)]"
              : "w-8 bg-[var(--main-color)]"
          }`}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  )}
>
  {values.map((itm, index) => (
    <div key={index} className="my-20">
      <Typography
        className="text-center text-[var(--main-gray)] text-[16px] mb-6 relative"
        style={{
          fontFamily: "var(--main-font)",
          lineHeight: "1.35em",
          letterSpacing: ".10em",
        }}
      >
        <span className="absolute top-[-25px] left-[50%] transform -translate-x-1/2 text-[40px] text-[var(--main-color)]">
          &#8220;
        </span>
        {itm.value}
      </Typography>
      <Typography
        className="w-[80%] mx-auto text-center text-[var(--second-gray)] text-[17px]"
        style={{
          fontFamily: "var(--third-font)",
          lineHeight: "1.75em",
          whiteSpace: "pre-wrap", 
        }}
      >
        {itm.description.split(' ').reduce((acc, word, i) => {
          if (i % 16 === 0 && i !== 0) {
            acc += '\n';
          }
          return acc + word + ' ';
        }, '')}
      </Typography>
    </div>
  ))}
</Carousel>






        
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6">
  <div className="flex flex-col items-start w-full md:w-1/2 order-2 md:order-1 pl-8">
    <h2 className="text-[#c9ab81] font-serif text-lg mb-2 italic">
      Get in touch
    </h2>
    <h1 className="text-3xl font-serif text-[#525252] tracking-wide uppercase mb-4">
      Contact
    </h1>
    <form onClick={handleSubmit(onSubmit)} className="w-full max-w-sm text-[#525252]"> 
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5">
          <Input
            variant="standard"
            {...register("name")}
            label="Name"
            error={!!errors.name}
            className="text-gray-800 gap-5"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="relative z-0 w-full mb-8 gap-5 px-6">
          <Input
            variant="standard"
            {...register("email")}
            label="E-mail"
            error={!!errors.email}
            className="text-gray-800 gap-5"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <Textarea
          variant="standard"
          {...register("message")}
          label="Message"
          error={!!errors.message}
          className="text-gray-800"
        />
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <MainButton title={"Submit"} />
      </div>
    </form>
  </div>

  <div className="flex flex-col items-start w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-44">
    <h2 className="text-[#c9ab81] font-serif text-lg mb-2 italic">
      Discover more
    </h2>
    <h1 className="text-3xl font-serif text-[#525252] tracking-wide uppercase mb-4">
      Reservations
    </h1>
  </div>
</div>

</div>
</div>
  );
}
