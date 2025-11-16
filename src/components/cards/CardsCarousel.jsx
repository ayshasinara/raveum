import React, { useRef } from 'react';
import './cards-carousel.css';

function CardsCarousel({ children }) {
  const scrollerRef = useRef(null);

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(':scope > *');
    const delta = (card?.clientWidth || 340) + 16;
    el.scrollBy({ left: dir * delta, behavior: 'smooth' });
  };

  return (
    <div className="cardsCarousel">
      <button
        type="button"
        aria-label="Scroll left"
        className="cardsCarousel__nav cardsCarousel__nav--left"
        onClick={() => scrollByCards(-1)}
      >
        ‹
      </button>
      <div className="cardsCarousel__scroller" ref={scrollerRef}>
        {children}
      </div>
      <button
        type="button"
        aria-label="Scroll right"
        className="cardsCarousel__nav cardsCarousel__nav--right"
        onClick={() => scrollByCards(1)}
      >
        ›
      </button>
    </div>
  );
}

export default CardsCarousel;


