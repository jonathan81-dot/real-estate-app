
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import styles from './LearnMore.module.css'
 
const features = [
  {
    title: 'Browse with confidence',
    text: 'Every listing shows the details that matter, from property type and size to the year it was built, so you can compare homes quickly.',
  },
  {
    title: 'Buy or rent',
    text: 'Whether you are ready to own or just need a place to live, you can explore both options in one place.',
  },
  {
    title: 'Help when you need it',
    text: 'Our team can answer your questions and arrange viewings, from your first search to moving day.',
  },
]
 
function LearnMore() {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.title}>About United Estates</h1>
          <p>
            We make finding a home simple. Browse modern homes, apartments and
            luxury properties with an intuitive search experience designed to
            help you explore with confidence.
          </p>
        </div>
 
        <div className={styles.features}>
          {features.map((feature) => (
            <div className={styles.feature} key={feature.title}>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
 
        <div className={styles.actions}>
          <Link to='/explore'>
            <button className={styles.primaryBtn}>Explore Properties</button>
          </Link>
          <Link to='/support'>
            <button className={styles.secondaryBtn}>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
 
export default LearnMore
 