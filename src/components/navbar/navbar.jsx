import React from 'react';
import Button from '../common/Button';
import './navbar.css';

const NavLink = ({ children, withCaret = false, href = '#' }) => (
  <a className="navbar__link" href={href}>
    <span>{children}</span>
    {withCaret && <span className="navbar__caret" />}
  </a>
);

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <div className="navbar__logo" />
          <div className="navbar__brandText">Wealthfront</div>
        </div>

        <div className="navbar__links">
          <NavLink>Cash</NavLink>
          <NavLink withCaret>Bonds</NavLink>
          <NavLink withCaret>Automated Investing</NavLink>
          <NavLink>Stocks</NavLink>
          <NavLink withCaret>Borrow</NavLink>
          <NavLink withCaret>Learn</NavLink>
        </div>

        <div className="navbar__actions">
          <Button variant="outline" size="sm">Log in</Button>
          <Button variant="primary" size="sm">Get started</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


