import React from 'react'
import {Link} from "react-router-dom";
import styles from './Header.module.css'
const Header = () => {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles.link__item}><Link to={'/'}>Home</Link></li>
        <li className={styles.link__item}><Link to={'/people'}>People</Link></li>
        <li className={styles.link__item}><Link to={'/notFound'} >Not Found</Link></li>
      </ul>
    </div>
  )
}

export default Header;