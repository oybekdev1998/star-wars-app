import React from 'react'
import {Link} from "react-router-dom";
import styles from './Header.module.css'
const Header = () => {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles.link__item}><Link to={'/'}>Home</Link></li>
        <li className={styles.link__item}><Link to={'/people/?page=1'}>People</Link></li>
        <li className={styles.link__item}><Link to={'/notFound'} >Not Found</Link></li>
        <li className={styles.link__item}><Link to={'/favorites'} >Favorites</Link></li>
      </ul>
    </div>
  )
}

export default Header;