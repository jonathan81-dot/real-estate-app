import React from 'react'
import styles from './CallToAction.module.css'
import { useNavigate } from 'react-router-dom';


function CallToAction() {

  const navigate = useNavigate();
  
  const HandleRedirect = () => {
    navigate('/explore');
  }

  return (
    <div className={styles.container}>
      <h1>Ready to Find Your Next Home?</h1>

      <div className={styles.call}>
        <p>Browse hundreds of properties and discover a place that fits your lifestyle.</p>
        <button onClick={HandleRedirect}>Explore Now</button>
      </div>
    </div>
  )
}

export default CallToAction