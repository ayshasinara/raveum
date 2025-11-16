import React from 'react';
import './chip-button.css';

function ChipButton({
  children,
  active = false,
  onClick,
  className = '',
  size = 'md', // md | lg
}) {
  const classes = [
    'chip',
    active ? 'chip--active' : 'chip--ghost',
    `chip--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default ChipButton;


