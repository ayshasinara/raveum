import React from 'react';
import Button from '../common/Button';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <p className="hero__eyebrow">New clients earn</p>
          <h1 className="hero__title">4.15% APY</h1>
          <p className="hero__subtitle">
            Boost your APY from 3.50% to 4.15% APY for 3 months
            when you <br />open and fund a Cash Account.
            No fees, no strings, and<br /> surprisingly few asterisks.
          </p>
          <div className="hero__cta">
            <Button variant="brand" size="md">Get started with $1</Button>
          </div>
          <p className="hero__fineprint">
            Base Annual Percentage Yield (APY) provided by program banks. Offer
            and rates subject to change.
          </p>
        </div>
        <div className="hero__right">
          <div className="phone">
            <div className="phone__screen">
              <div className="phone__curve" />
              <div className="phone__list">
                <div className="phone__item" />
                <div className="phone__item" />
                <div className="phone__item" />
                <div className="phone__item" />
                <div className="phone__item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


