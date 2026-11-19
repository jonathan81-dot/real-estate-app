import React, { useState } from 'react';
import Item from './Item';
import styles from './List.module.css';
import Nav from './Nav';
import Footer from './Footer';
import images from './images.json'
import properties from './properties.json'


function List({ purpose }) {
  const API_KEY = "1c356ec8feeb484fb255c6ea751da9e8";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemID, setItemID] = useState("");
  let id = 0;
  
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);

  //       const response = await fetch("https://api.rentcast.io/v1/properties?limit=20", {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'X-Api-Key': API_KEY
  //         }
  //       })

  //       if(!response.ok) {
  //         throw new Error(`HTTP error! Status : ${response.status}`)
  //       }

  //       const result = await response.json();
  //       setData(result);
  //       setError(null);

  //     } catch (err) {
  //       if(err.name !== 'AbortError') {
  //         setError(err.message);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData();

  // }, []);


  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Nav />
      <div className={styles.list}>
        { !isLoading ? (
            properties.map((property) => (
              purpose == property.purpose? 
                <Item property={property} key={property.id} price={property.lastSalePrice} /> : ""
            ))
          ) : (
            <p>Loading....</p>
          )
        
          
        }
      </div>
  </div>
  )
}

export default List;