import React from 'react';
import '../styles/navbar.css';

const Navbar = ({ size, setShow, show }) => {
  return (
    <nav>
      <div className="nav_box">
        <span
          className="my_shop"
          onClick={() => setShow(true)}
          style={{ fontWeight: show ? 'bold' : 'normal' }}
        >
          My Shopping App
        </span>
        <div
          className="cart"
          onClick={() => setShow(false)}
          style={{ fontWeight: show ? 'normal' : 'bold' }}
        >
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
