import React from 'react';
import Button from '../common/Button';
import './feature-section.css';

function FeatureSection({
  eyebrow,
  title,
  description,
  bullets = [],
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
  image, // JSX or <img />
}) {
  return (
    <section className="feature">
      <div className="feature__container">
        <div className="feature__card">
          <div className="feature__content">
            {eyebrow && <p className="feature__eyebrow">{eyebrow}</p>}
            {title && <h2 className="feature__title">{title}</h2>}
            {description && <p className="feature__desc">{description}</p>}

            {bullets?.length > 0 && (
              <ul className="feature__bullets">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="feature__ctas">
                {primaryCta && (
                  <Button variant="brand" size="md" onClick={onPrimaryClick}>
                    {primaryCta}
                  </Button>
                )}
                {secondaryCta && (
                  <Button variant="outlineBrand" size="md" onClick={onSecondaryClick}>
                    {secondaryCta}
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="feature__media">
            {image}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;


