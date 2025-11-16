import React from 'react';
import './button.css';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  as = 'button',
  href,
  className = ''
}) {
  const Tag = as === 'a' ? 'a' : 'button';

  const classes = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const sharedProps =
    Tag === 'a'
      ? { href }
      : { type: 'button' };

  return (
    <Tag className={classes} onClick={onClick} {...sharedProps}>
      {children}
    </Tag>
  );
}

export default Button;


