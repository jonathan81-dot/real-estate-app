import React from 'react'
import styles from './Featured.module.css'
import images from './images.json'

function Featured() {


  return (
    <div className={styles.container}>
      <h1>Featured Properties</h1>
      <p>Explore a curated collection of homes selected for their design, location, and value.</p>

      <div className={styles.images}>
        {
          images.map((img) => (
            <li><img src={img.src} alt="" key={img.id} className={styles.image} /></li>
          ))
        }
        {
          images.map((img) => (
            <li><img src={img.src} alt="" key={`copy-${img.id}`} className={styles.image} /></li>
          ))
        }
      </div>
    </div>
  )
}

export default Featured