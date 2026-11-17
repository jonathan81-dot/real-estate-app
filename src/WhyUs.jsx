import React from 'react'
import styles from './WhyUs.module.css'

function WhyUs() {
  return (
    <div className={styles.container}>
        <h1>Why Choose United Estates?</h1>

        <div className={styles.cards}>
            <div className={styles.card}>
                <h2>🏡 Verified Listings</h2>
                <p>Browse properties with detailed information and high-quality imagery.</p>
            </div>

            <div className={styles.card}>
                <h2>📍 Prime Locations</h2>
                <p>Discover homes in some of the most desirable neighborhoods.</p>
            </div>

            <div className={styles.card}>
                <h2>🔍 Smart Search</h2>
                <p>Quickly find properties using filters for price, bedrooms, bathrooms, and more.</p>
            </div>

            <div className={styles.card}>
                <h2>💙 Modern Experience</h2>
                <p>A clean, responsive interface built to make property browsing effortless.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyUs