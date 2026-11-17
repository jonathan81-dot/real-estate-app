import React from 'react';
import styles from "./Nav.module.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div><Link to='/' className={styles.logo}><span>United</span> Estates</Link></div>
      <div>
        <ul className={styles.actions}>
          <li><Link to='/explore' className={styles.action}>Explore</Link></li>
          <li><Link to='/buy' className={styles.action}>Buy</Link></li>
          <li><Link to='/rent' className={styles.action}>Rent</Link></li>
        </ul>
      </div>
      <div><Link to='/support' className={styles.action}>Contact Us</Link></div>
    </nav>
  )
}

export default Nav;