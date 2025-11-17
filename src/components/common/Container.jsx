import React from 'react';
import './container.css';

function Container({ 
  children, 
  className = '', 
  narrow = false,
  ...props 
}) {
  const classes = [
    'container',
    narrow && 'container--narrow',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Container;

