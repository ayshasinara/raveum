import React from 'react';
import './button.css';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  as = 'button',
  href,
  className = '',
  padding,
  fontSize
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

  const style = {};
  if (padding) style.padding = padding;
  if (fontSize) style.fontSize = fontSize;

  return (
    <Tag className={classes} onClick={onClick} style={style} {...sharedProps}>
      {children}
    </Tag>
  );
}

export default Button;


