import React from 'react';
import './accordion.css';

function AccordionItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <div className="accordion-item">
      <button
        className={`accordion-item__question ${isOpen ? 'accordion-item__question--open' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-answer-${index}`}
      >
        <span className="accordion-item__questionText">{question}</span>
        <span className="accordion-item__chevron">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d={isOpen ? "M4 8L8 4L12 8" : "M4 6L8 10L12 6"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div
          id={`accordion-answer-${index}`}
          className="accordion-item__answer"
          role="region"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;

