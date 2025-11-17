import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './accordion.css';

function Accordion({ items = [], allowMultiple = false, className = '' }) {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndices.includes(index)}
          onToggle={() => toggleItem(index)}
          index={index}
        />
      ))}
    </div>
  );
}

export default Accordion;

