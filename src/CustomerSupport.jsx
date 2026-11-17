import React, { useState } from 'react'
import styles from './CustomerSupport.module.css'
import { ArrowLeftIcon, ArrowRightIcon } from './svgIcons';
import { Link } from 'react-router-dom';


function CustomerSupport() {
  const [request, SetRequest] = useState("");
  let message = "";


  const HandleFormSubmit = () => {
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.navBtns}>
        <Link to={'/'}>
          <button className={styles.navBtnL}><ArrowLeftIcon className={styles.arrowLeft} />Home</button>
        </Link>

        <Link to={'/explore'}>
          <button className={styles.navBtnR}>Explore<ArrowRightIcon className={styles.arrowRight} /></button>
        </Link>
      </div>
      
      <h1>Let's find the right property for you</h1>
      <p className={styles.paragraph}>Whether you're looking to buy, rent, sell, or simply have a question about one of our properties, our team is here to help.</p>
      
      <h2>Phone</h2>
      <p>+1 012 345 6789</p>
      
      <h2>E-mail</h2>
      <p>support@unitedestates.com</p>

      <h2>Office</h2>
      <p>123 Business Avenue</p>
      <p>City, Country</p>
      
      <h2>Opening Hours</h2>
      <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
      <p>Sat: 10:00 AM - 4:00 PM</p>
      <p>Sun: Closed</p>

      <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2>Send us a message</h2>
            <form action="" className={styles.form}>
              <div className={styles.details}>
                <label htmlFor="name" className={styles.formElement}>Fullname<input type="text" id='name' /></label>
                <label htmlFor="email" className={styles.formElement}>Email<input type="email" id='email' /></label>
                <label htmlFor="phone" className={styles.formElement}>Phone Number<input type="tel" id='phone' /></label>
                <label htmlFor="requestType" className={styles.formElement}>
                  I'm interested in
                  <select name="request" id="requestType">
                    <option value="buying">Buying a property</option>
                    <option value="selling">Selling a property</option>
                    <option value="other" onChange={(e) => {SetRequest(e.target.value)}}>Other....</option>
                  </select>
                  {
                  request === "other" && (
                    <label htmlFor="other">
                      <input type="text" id="other" /> Other
                    </label>
                  )}
                </label>
                <label htmlFor="message" className={styles.formElement}>Message<input type="text" id='message'/></label>
                
                <button onClick={(e) => {e.preventDefault; message = e.target.value; HandleFormSubmit}}>Submit</button>
              </div>
            </form>
          </div>
          

          <div className={styles.location}>
            <h2>Find us</h2>
            <iframe className={styles.map} width="600" height="600" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=
&q=5590+Joliet+Street+Denver,+Colorado+88239&aq=&sll=34.168218,-111.930907
&sspn=15.047206,26.30127&ie=UTF8&hq=&hnear=5590+Joliet+St,+Denver,+Colorado
+80239&ll=39.797915,-104.860812&spn=0.013667,0.025685&t=m&z=14&output=embed" ></iframe>
          </div>
      </div>
    </div>
  )
}

export default CustomerSupport