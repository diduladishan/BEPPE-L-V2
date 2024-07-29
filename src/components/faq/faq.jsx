// src/Accordion.js
import React, { useState } from "react";
import "./faq.css";
import { MdKeyboardArrowDown, MdKeyboardControlKey } from "react-icons/md";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="font-semibold lg:text-[24px] md:text-[20px]">{title}</h3>
        <div>{isOpen ? <MdKeyboardControlKey /> : <MdKeyboardArrowDown />}</div>
      </div>
      {isOpen && (
        <div className="accordion-content text-sm md:text-base">{content}</div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-[100px] ">
        <p className="font-black text-[#652f46] text-center w-max px-16 text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] border-4 border-[#364e38] rounded-lg">
          Frequently Asked Questions
        </p>
      </div>

      <div className="flex items-center justify-center mb-[50px]">
        <div className="container">
          <AccordionItem
            title="What is Galactic Goddess?"
            content="Content for What is Galactic Goddess?"
          />
          <AccordionItem
            title="When is the landing taking place?"
            content="Content for When is the landing taking place?"
          />
          <AccordionItem
            title="What is the mint price?"
            content="Content for What is the mint price?"
          />
          <AccordionItem
            title="Will there be more collection release?"
            content="Content for Will there be more collection releases?"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
