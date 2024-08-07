import React, { useState } from "react";
import "./faq.css";

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className={`accordion-item-header ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {title}
      </div>
      <div
        className="accordion-item-body"
        style={{
          maxHeight: isActive
            ? `${
                document.querySelector(".accordion-item-body-content")
                  .scrollHeight
              }px`
            : "0",
        }}
      >
        <div className="accordion-item-body-content">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "What is Galactic Goddess?",
      content: `Content for the What is Galactic Goddess?`,
    },
    {
      title: "When is the landing taking place?",
      content: `Content for When is the landing taking place?`,
    },

    {
      title: "What is the mint price?",
      content: `Content for What is the mint price?`,
    },

    {
      title: "Will there be more collection release?",
      content: `Content for Will there be more collection releases?`,
    },
  ];

  return (
    <div className="my-[50px] sm:my-[75px] md:my-[100px]">
      <div className="flex items-center justify-center my-[50px] sm:my-[75px] md:my-[100px]">
        <p className="font-black text-[#652f46] text-center w-max mx-[16px] px-[16px] text-[18px] sm:text-[38px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] border-4 border-[#364e38] rounded-lg">
          Frequently Asked Questions
        </p>
      </div>
      <div className="accordion">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
