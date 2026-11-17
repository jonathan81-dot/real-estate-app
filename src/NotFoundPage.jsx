import React from 'react'
import styles from './NotFoundPage.module.css'
import { Navigate, useNavigate } from 'react-router-dom'

function NotFoundPage() {
    const navigate = useNavigate();

  return (
    <div className={styles.error}>
        <h1>404 Page not found</h1>
        <p>The address your trying to access was not found please return back to homepage</p>
        <button type='button' onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default NotFoundPage