import React from 'react'
import properties from './properties.json'
import { Link, useParams } from 'react-router-dom';
import styles from './Details.module.css'
import Nav from './Nav';
import Footer from './Footer';
import { ArrowLeftIcon, ArrowRightIcon} from './svgIcons'

function Details() {

    const { propertyID } = useParams();
    const selectedItem = properties.find((p) => p.id === propertyID);

  return (
    <div>
        <Nav />
        <div key={selectedItem.id || selectedItem.formattedAddress} className={styles.item}>
        <h1 className={styles.title}>{selectedItem.formattedAddress}</h1>

        <div className={styles.content}>
          <div className={styles.layout}>
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-source" />
            <div className={styles.contact}>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" alt="" />    
              
              <div className={styles.contactDetails}>
                <h2>Owner's: {selectedItem.owner.names}</h2>
                <p>E-mail: {selectedItem.owner.names}@gmail.com</p>
                <p>Phone Number: +1 123-455-678</p>
              </div>
            </div>
          </div>
          
          <div className={styles.details}>
            <div className={styles.detailsLayout}>
              <h2>Specifications</h2>
              <ul>
                  <li>Property Type: {selectedItem.propertyType}</li>
                  <li>Number of bedrooms: {selectedItem.bedrooms}</li>
                  <li>Number of bathrooms: {selectedItem.bathrooms}</li>
                  <li>Was built in: {selectedItem.yearBuilt}</li>
                  <li>Architecture Type: {selectedItem.features.architectureType}</li>
                  <li>Cooling: {selectedItem.features.cooling? "Yes" : "No"}</li>
                  {
                  selectedItem.features.cooling? <li>Cooling Type: {selectedItem.features.coolingType}</li> : ""
                  }
                  <li>heating: {selectedItem.features.heating? "Yes" : "No"}</li>
                  {
                  selectedItem.features.heating? <li>Heating Type: {selectedItem.features.heatingType}</li> : ""
                  }
                  <li>Fireplace: {selectedItem.features.fireplace? "Yes": "No"}</li>
                  {
                  selectedItem.features.fireplace? <li>Fireplace Type: {selectedItem.features.fireplaceType}</li> : ""
                  }
                  <li>Garage: {selectedItem.features.garage? "Yes": "No"}</li>
                  {
                  selectedItem.features.garage? <li>Garage Type: {selectedItem.features.garageType}</li> : ""
                  }
                  {
                  selectedItem.features.garage? <li>Garage Spaces: {selectedItem.features.garageSpaces}</li> : ""
                  }
                  <li>Exterior Type: {selectedItem.features.exteriorType}</li>
                  <li>Foundation Type: {selectedItem.features.foundationType}</li>
                  <li>Pool: {selectedItem.features.pool? "Yes": "No"}</li>
                  {
                  selectedItem.features.pool? <li>Pool Type: {selectedItem.features.poolType}</li> : ""
                  }
                  <li>Roof Type: {selectedItem.features.roofType}</li>
                  <li>Room Count: {selectedItem.features.roomCount}</li>
                  <li>Unit Count: {selectedItem.features.unitCount}</li>
                  <li>View Type: {selectedItem.features.viewType}</li>

                  <li>Owner Type: {selectedItem.owner.type}</li>
                  <li>Owner Name(s): {selectedItem.owner.names}</li>
                  <li>Is Owner Occupied: {selectedItem.features.ownerOccupied? "Yes":"No"}</li>
              </ul>

              <div className={styles.actionBtns}>
                <button className={styles.buyBtn}>Buy</button>
                <button className={styles.rentBtn}>Rent</button>
              </div>
            </div>
          </div>
        </div>



        <Link to={'/explore'}>
          <button className={styles.navBtnL}><ArrowLeftIcon className={styles.arrowLeft} />Back</button>
        </Link>
      </div> 
    </div>
  )
}

export default Details