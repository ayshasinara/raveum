import React from 'react';
import Button from '../common/Button';
import './banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">
        <h1 className="banner__headline">
          <span className="banner__headlineBold">Save and invest</span>
          <span className="banner__headlineScript"> for what's next.</span>
        </h1>
        <div className="banner__cta">
          <Button variant="banner" size="md" padding="14px 28px" fontSize="16px">
            Open account
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;

