import React from 'react'
import {Link} from "react-router-dom";
import Favorite from '../Favorite/Favorite';
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li><Link className={styles.link} to={'/'}>Home</Link></li>
        <li><Link className={styles.link} to={'/people/?page=1'}>People</Link></li>
        <li><Link className={styles.link} to={'/notFound'} >Not Found</Link></li>
      </ul>
      <Favorite />
      
  
    </div>
  )
}

export default Header;