import React from 'react';
import {useLocation} from 'react-router-dom'
import img from './page-not-found.png'
import styles from './NotFound.module.css'
const NotFound = () => {
  const location = useLocation()
  return (
    <>
      <img className={styles.img} src={img} alt={NotFound} />
      <p className={styles.text}>Not match {location.pathname}</p>
    </>
  )
}

export default NotFound;