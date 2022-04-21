import React from 'react';
import styles from './PeopleList.module.css'

const PeopleList = (people) => {
    return (
        <ul className={styles.list__container}>
            {people.people.map(({img, id, name}) => {
                return (
                  <a href="#">
                    <li className={styles.list__item}>
                      <img className={styles.list__img} src={img} alt={name} />
                      <p className={styles.list__title}>{name}</p>
                    </li>
                  </a>
                )
            })
            }
        </ul>
    )
}

export default PeopleList;