import { Link, useParams } from 'react-router-dom';
import styles from './Item.module.css';
import Nav from './Nav';
import images from './images.json'

function Item({ property }) {
  const {propertyID} = useParams();
  let id = 0;


  return (
    <>
      {
        <Link to={`/explore/${property.id}`} className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.title}>{property.formattedAddress}</h1>

            <div className={styles.card}>
              <img src={images.find((image) => image.id === String(id))?.src} key={id} alt="" />
              <ul className={styles.details}>
                <li>Property Type: {property.propertyType}</li>
                <li>Number of bedrooms: {property.bedrooms}</li>
                <li>Number of bathrooms: {property.bathrooms}</li>
                <li>Was built in: {property.yearBuilt}</li>
              </ul>
            </div>
          </div>
        </Link>       
      }
    </>
  )
}

export default Item;