import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
  Carousel,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const values = [
  {
    value: "Creativity",
    description:
      "We celebrate creativity in all its forms and are committed to offering only the most unique and innovative art pieces.",
  },
  {
    value: "Quality",
    description:
      "We believe in quality over quantity. Each item is carefully selected to ensure it meets our high standards.",
  },
  {
    value: "Sustainability",
    description:
      "We are dedicated to promoting sustainable practices by supporting artists who use eco-friendly materials and techniques.",
  },
  {
    value: "Community",
    description:
      "We aim to build a strong community of artists and art lovers who share our passion for handmade art and participate in our art-related events.",
  },
];

const faq = [
  {
    question: "What types of art pieces can I find on your website?",
    answer:
      "You can find a wide range of handmade art pieces, including pottery, paintings, sculptures, and other forms of visual art. Each item is crafted by skilled artisans and is unique.",
  },
  {
    question: "Do you organize any art-related events?",
    answer:
      "Yes, we regularly organize events such as art exhibitions, workshops, and live demonstrations. These events provide opportunities to engage with the art community and learn more about various art forms.",
  },
  {
    question: "How can I be sure of the quality of the items?",
    answer:
      "We take great care in selecting the artists and pieces featured on our website. Every item is thoroughly reviewed to ensure it meets our quality standards before being listed.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all items. If you are not satisfied with your purchase, please contact us within 30 days of receiving your order to initiate a return or exchange.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through the contact form on our website. We are here to help with any questions or concerns.",
  },
];

export default function About() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="relative flex-col items-center mb-8 bg-white z-40 pb-20">
      <section className="w-full max-w-screen h-[82vh] bg-cover bg-bottom bg-no-repeat landing flex items-center">
        <div className="w-full ">
          <Title title={"about us"} color={"white"} />
        </div>
      </section>
      <section className="my-20 w-[80%] mx-auto mb-40">
        <Typography
          className="text-[var(--main-gray)] text-[19px] text-center"
          style={{ fontFamily: "var(--third-font)" }}
        >
          Welcome to Art & Handmade, your go-to destination for unique and
          handmade art pieces. We are passionate about connecting art
          enthusiasts with talented artisans who create one-of-a-kind items that
          bring beauty, creativity, and inspiration into your life. At Art &
          Handmade, we believe that art is not just a product but a story. Each
          piece in our collection is carefully curated to reflect the
          dedication, skill, and love of the artist. Whether you’re looking for
          exquisite pottery, stunning paintings, or any other art form, we have
          something that speaks to your taste and style. In addition to offering
          beautiful handmade pieces, we are also committed to fostering a
          vibrant art community. We organize events that bring together artists,
          collectors, and art lovers to celebrate creativity and explore the
          diverse world of art. Our events range from art exhibitions and
          workshops to live demonstrations, providing unique opportunities to
          engage with the art world. Our mission is to support and empower
          artists by providing a platform where they can showcase their work to
          a global audience and by organizing events that connect them with the
          broader community. We strive to create a space where art lovers can
          discover and purchase authentic handmade pieces while participating in
          events that deepen their appreciation for art. Thank you for being a
          part of our journey. We hope you find something that inspires you and
          join us in celebrating the world of art.
        </Typography>
      </section>
      <section className=" w-[80%] mx-auto h-72 ">
        <Title title={"Our Values"} />
        <Carousel
          className="h-full"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8 bg-[var(--main-color)]"
                      : "w-4 bg-[var(--main-gray)]"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <button
              onClick={handlePrev}
              className="absolute text-6xl left-4 top-1/2 transform -translate-y-1/2 text-[var(--main-gray)] hover:text-[var(--main-color)]"
            >
              &#8249;
            </button>
          )}
          nextArrow={({ handleNext }) => (
            <button
              onClick={handleNext}
              className="absolute text-6xl right-4 top-1/2 transform -translate-y-1/2 text-[var(--main-gray)] hover:text-[var(--main-color)]"
            >
              &#8250;
            </button>
          )}
        >
          {values.map((itm, index) => (
            <div key={index} className=" my-20 ">
              <Typography
                className=" capitalize text-center text-[var(--main-color)] text-[28px] mb-6"
                style={{
                  fontFamily: "var(--main-font)",
                  lineHeight: "1.35em",
                  letterSpacing: ".16em",
                }}
              >
                {itm.value}
              </Typography>
              <Typography
                className="w-[80%] mx-auto text-center text-[var(--second-gray)] text-[17px]"
                style={{
                  fontFamily: "var(--third-font)",
                  lineHeight: "1.35em",
                }}
              >
                {itm.description}
              </Typography>
            </div>
          ))}
        </Carousel>
      </section>
      <section className=" w-[80%] mx-auto mt-60 mb-40">
        <Title title={"faq"} />

        {faq.map((q, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            animate={CUSTOM_ANIMATION}
          >
            <AccordionHeader
              className="text-[20px] font-normal text-[var(--main-gray)]"
              style={{ fontFamily: "var(--main-font)", letterSpacing: ".16em" }}
              onClick={() => handleOpen(index + 1)}
            >
              {q.question}
            </AccordionHeader>
            <AccordionBody
              className="text-[17px]"
              style={{ fontFamily: "var(--third-font)" }}
            >
              {q.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </section>
    </div>
  );
}