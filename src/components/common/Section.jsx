import React from 'react';
import './section.css';

function Section({ 
  children, 
  className = '', 
  padding = 'md',
  background = 'transparent',
  ...props 
}) {
  const classes = [
    'section',
    `section--padding-${padding}`,
    background !== 'transparent' && `section--bg-${background}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}

export default Section;

