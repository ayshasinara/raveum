import React from 'react';
import './stats.css';

function StatsStrip() {
  return (
    <section className="statsStrip">
      <div className="statsStrip__container">
        <div className="statsStrip__left">
          <div className="statsStrip__logoWrapper">
            <div className="statsStrip__logoN">N</div>
            <div className="statsStrip__logoText">nerdwallet<sup>™</sup></div>
          </div>
          <div className="statsStrip__caption">
            Best Robo-advisor, Portfolio Options, 2022-25<sup>1</sup>
          </div>
        </div>

        <div className="statsStrip__left">
          <div className="statsStrip__logoText statsStrip__logoText--bankrate">Bankrate</div>
          <div className="statsStrip__caption">
            Best Cash Management Account, 2023-25<sup>1</sup><br />
            Best Investing App, 2023-24<sup>1</sup>
          </div>
        </div>

        <div className="statsStrip__stat">
          <div className="statsStrip__value">1.3M+</div>
          <div className="statsStrip__label">Funded clients<sup>2</sup></div>
        </div>

        <div className="statsStrip__stat">
          <div className="statsStrip__value">$90B+</div>
          <div className="statsStrip__label">In total assets<sup>2</sup></div>
        </div>

        <div className="statsStrip__stat">
          <div className="statsStrip__value">4.8 ★</div>
          <div className="statsStrip__label">Apple App Store<sup>3</sup></div>
        </div>

        <div className="statsStrip__stat">
          <div className="statsStrip__value">4.9 ★</div>
          <div className="statsStrip__label">Google Play Store<sup>3</sup></div>
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;


