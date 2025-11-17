import React from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
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
      <Container className="navbar__container">
        <div className="navbar__brand">
          <img 
            src="https://www.wealthfront.com/next/contenthash/next/svg/optimized/wordmark-surface-dark.contenthash.0eff70a79bddf191f2be3b9c62051ae9a9c7619e.svg" 
            alt="Wealthfront" 
            className="navbar__logoImg"
          />
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
          <Button variant="outline" size="sm" padding="15px 25px" fontSize="16px">Log in</Button>
          <Button variant="primary" size="sm" padding="15px 25px" fontSize="16px">Get started</Button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;


