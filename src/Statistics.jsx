import React from 'react'
import styles from './Statistics.module.css'

function Statistics() {
  return (
    <div className={styles.container}>

      <div className={styles.companySlider}>
        <div className={styles.companies}>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
        </div>

        <div className={styles.companies}>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
        </div>
      </div>

      {/* <hr /> */}

      <div className={styles.claims}>
        <div className={styles.claim}>
          <p><span>1,200+</span></p>
          <p>Properties Listed</p>
        </div>

        <div className={styles.claim}>
          <p><span>350k+</span></p>
          <p>Happy Clients</p>
        </div>
        
        <div className={styles.claim}>
          <p><span>50+</span></p>
          <p>Cities Covered</p>
        </div>  

        <div className={styles.claim}>
          <p><span>24/7</span></p>
          <p>Customer Support</p>
        </div>  
      </div>
      
      {/* <hr /> */}

      <div className={styles.companySlider}>
        <div className={styles.companies}>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
        </div>

        <div className={styles.companies}>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
          <h6>Company placeholder</h6>
        </div>
      </div>
    </div>
  )
}

export default Statistics