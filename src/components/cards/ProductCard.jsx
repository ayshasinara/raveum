import React from 'react';
import ChipButton from '../common/ChipButton';
import './product-card.css';

function ProductCard({
  icon,
  title,
  description,
  tags = [],
  onTagClick,
}) {
  return (
    <div className="pCard">
      <div className="pCard__header">
        <div className="pCard__icon">{icon}</div>
        <h4 className="pCard__title">{title}</h4>
      </div>
      <p className="pCard__desc">{description}</p>
      {tags?.length > 0 && (
        <div className="pCard__tags">
          {tags.map((t, i) => (
            <ChipButton key={i} size="xs" onClick={() => onTagClick?.(t)}>
              {t}
            </ChipButton>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCard;


