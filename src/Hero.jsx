import React from 'react'
import styles from './Hero.module.css'
import NavHero from './NavHero';
import { useNavigate } from 'react-router-dom';

function Hero() {
  
  const navigate = useNavigate();
  
  const HandleRedirect = () => {
    navigate('/explore');
  }

  const HandleRedirectLearnMore = () => {
    navigate('/learn-more');
  }

  return (
    <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>
          <NavHero />
          <h1>Find Your Perfect Place to Call Home</h1>
          <p>Browse modern homes, apartments, and luxury properties with an intuitive search experience designed to help you explore with confidence.</p>
      
          <div className={styles.heroBtns}>
              <button className={styles.exploreBtn} onClick={HandleRedirect}>Explore Properties</button>
              <button className={styles.learnBtn} onClick={HandleRedirectLearnMore}>Learn More</button>
          </div>
        </div>

    </div>
  )
}

export default Hero