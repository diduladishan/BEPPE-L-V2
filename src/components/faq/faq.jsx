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
        <h3 className="font-semibold text-[24px]">{title}</h3>
        <div>{isOpen ? <MdKeyboardControlKey /> : <MdKeyboardArrowDown />}</div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-[100px]">
        <p className="text-[160px] font-black text-white text-center bg-[#000] w-max px-16">
          FAQ
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
            title="Will there be more collection releases?"
            content="Content for Will there be more collection releases?"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
