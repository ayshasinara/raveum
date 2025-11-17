import React, { useState, useEffect } from 'react';
import StatsBox from '../stats/StatsBox';
import './testimonial.css';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    quote: "My most favorite thing is that I don't have to think about it.",
    author: 'Sid V',
    since: 'Client since 2015',
    icon: '👤'
  },
  {
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop',
    quote: "Wealthfront makes investing simple and stress-free.",
    author: 'Sarah M',
    since: 'Client since 2018',
    icon: '👤'
  },
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    quote: "I love how it automatically rebalances my portfolio.",
    author: 'Mike T',
    since: 'Client since 2020',
    icon: '👤'
  }
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonial">
      <div className="testimonial__container">
        <div className="testimonial__left">
          <div className="testimonial__quoteMark">"</div>
          <h2 className="testimonial__headline">
            Wealthfront is the best overall robo-advisor.
          </h2>
          <div className="testimonial__attribution">
            <div className="testimonial__logoWrapper">
              <img 
                src="https://www.wealthfront.com/next/contenthash/next/svg/optimized/investopedia-dark.contenthash.36602d3792c6b1594c92cae07b47f77d5d82bf4f.svg" 
                alt="Investopedia" 
                className="testimonial__logoImg"
              />
            </div>
            <div className="testimonial__yearWrapper">
              <span className="testimonial__year">2025</span>
              <sup className="testimonial__sup">⁴</sup>
            </div>
          </div>
        </div>

        <div className="testimonial__right">
          <div className="testimonial__imageWrapper">
            <img 
              src={currentTestimonial.image} 
              alt="Client testimonial" 
              className="testimonial__image"
            />
            <div className="testimonial__overlay">
              <div className="testimonial__overlayIcon">{currentTestimonial.icon}</div>
              <p className="testimonial__quote">{currentTestimonial.quote}</p>
              <p className="testimonial__author">
                {currentTestimonial.author} | {currentTestimonial.since}
              </p>
            </div>
            <div className="testimonial__indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial__indicator ${
                    index === currentIndex ? 'testimonial__indicator--active' : ''
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <StatsBox
        stats={[
          { value: '1.3M+', label: 'Trusted by 1.3M+ clients' },
          { value: '$90B+', label: '$90B+ in client funds' },
          { value: '13+ years', label: 'Simplifying finances since 2011' }
        ]}
      />

      <div className="testimonial__fineprint">
        The testimonials above are by clients of Wealthfront Advisers and Wealthfront Brokerage. No compensation was provided. These testimonials may not be representative of other clients' experience. Past performance is no guarantee of success. Investopedia receives compensation from Wealthfront Advisers for advertising, which presents a conflict of interest. The endorsements provided are independent and not directly influenced by the compensation. There is no other affiliation between Investopedia and Wealthfront Advisers, and Investopedia is not a client of Wealthfront Advisers.
      </div>
    
    </section>
  );
}

export default Testimonial;

