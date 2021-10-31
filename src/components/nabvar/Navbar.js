import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cart = useSelector(state => state.cart);
  
  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>GamesKart</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/products">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link to="/cart">Cart</Link><span>{cart.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
