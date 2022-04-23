import React from 'react'
import styles from './PersonInfo.module.css'

const PersonInfo = ({personInfo}) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {
          personInfo && (
            personInfo.map(({title, data}) => {
              return (
                data && (
                <li className={styles.list__item} key={title}> <span className={styles.item__title}>{title}</span>: {data} </li>
              ) 
            )
          })
          )
        }
      </ul>
    </div>
  )
}

export default PersonInfo;