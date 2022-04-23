import React from 'react';
import { useNavigate } from 'react-router-dom';

import imgBack from './img/left-arrow.png'
import styles from './PersonLinkBack.module.css'
const PersonLinkBack = () => {
  
  const navigate = useNavigate()
  
  const handleBack = (e) => {
    e.preventDefault()
    navigate(-1);

  }
  return (
    <div className={styles.container}>
     
      <img
        className={styles.img}
        src={imgBack} alt='Go Back' />
      <a
        href='2#' 
        onClick={handleBack}
        className={styles.link}
    >
      Go back
    </a>
    </div>
  )
}

export default PersonLinkBack