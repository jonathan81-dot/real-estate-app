import React, { useState } from 'react'
import './App.css'
import './App.css'
import Item from './Item'
import List from './List'
import Nav from './Nav'
import NotFoundPage from './NotFoundPage'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Details from './Details'
import Footer from './Footer'
import Hero from './Hero'
import LandingPage from './LandingPage'
import LearnMore from './LearnMore'
import CustomerSupport from './CustomerSupport'
import Buy from './Buy'
import Rent from './Rent'



function App() {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const router = createHashRouter([
    {
      path: '/',
      element: <LandingPage />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/explore',
      element: <List />,
    },
    {
      path: '/buy',
      element: <Buy />
    },
    {
      path: '/rent',
      element: <Rent />
    },
    {
      path: '/explore/:propertyID',
      element: <Details />
    },
    {
      path: '/learn-more',
      element: <LearnMore />
    },
    {
      path: '/support',
      element: <CustomerSupport />
    }
    // {
    //   path: '/explore/:itemID',
    //   element: <Item />,
    // }
  ]);

  return (
    <div className='appContainer'>
      <div className='router-content-size'>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  )
}

export default App
