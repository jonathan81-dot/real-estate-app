import React from 'react';
import styles from "./NavHero.module.css";
import { Link } from 'react-router-dom';

function NavHero() {
  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
        <div><Link to='/' className={styles.logo}><span>United</span> Estates</Link></div>
        <div>
            <ul className={styles.actions}>
            <li><Link to='/explore' className={styles.action}>Explore</Link></li>
            <li><Link to='/buy' className={styles.action}>Buy</Link></li>
            <li><Link to='/rent' className={styles.action}>Rent</Link></li>
            </ul>
        </div>
        <div><Link to='/support' className={styles.support}>Contact Us</Link></div>
        </nav>
    </div>
  )
}

export default NavHero;