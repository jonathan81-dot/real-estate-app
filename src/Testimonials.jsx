import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.container}>
      <h1>What Our Clients Say</h1>

      <div className={styles.reviews}>

        <div className={styles.review}>
          <hr />
          <p>"United Estates made finding my dream apartment incredibly easy. The search experience was smooth and intuitive."</p>
          <h2>— Sarah M.</h2>
        </div>

        <div className={styles.review}>
          <p>"The property details and clean interface helped me compare homes quickly."</p>
          <h2>— Michael R.</h2>
        </div>

        <div className={styles.review}>
          <hr style={{marginLeft: "auto"}} />
          <p style={{paddingLeft: "50px"}}>"10 out of 10 experience. Customer service is always ready to help; They really make sure your problem is settled"</p>
          <h2 style={{paddingLeft: "50px"}}>— Roger Peterson</h2>
        </div>
      </div>
    </div>
  )
}

export default Testimonials