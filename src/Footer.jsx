import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'


function Footer() {

  return (
    <div className={styles.footer}>
      <p>© 2026 United Estates</p>
      <p style={{marginBottom: "0px"}}>This application was created as a portfolio project to showcase web development skills.</p>
      <p style={{marginTop: "0px"}}>It is not affiliated with or endorsed by any real estate company.</p>
      
      <div className={styles.links}>
        <ul>
          <li>contact</li> 
          {/* /contact /terms  /privacy */}
          <li>terms</li>
          <li>privacy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer