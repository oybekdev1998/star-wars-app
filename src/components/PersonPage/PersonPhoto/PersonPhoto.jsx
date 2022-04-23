import React from 'react'
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({personPhoto, personName}) => {
  return (
    <div className={styles.container}>
      <img className={styles.person__photo} src={personPhoto} alt={personName} />
    </div>
  )
}

export default PersonPhoto