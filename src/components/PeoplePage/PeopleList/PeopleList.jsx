import React from 'react';
import PropTypes from 'prop-types'
import styles from './PeopleList.module.css'

const PeopleList = (people) => {
    return (
        <>
          <ul className={styles.list__container}>
            {people.people.map(({img, id, name}) => {
              return (
                <a href="2#" key={id}>
                  <li className={styles.list__item}>
                    <img className={styles.list__img} src={img} alt={name} />
                    <p className={styles.list__title}>{name}</p>
                  </li>
                </a>
              )
            })
            }
          </ul>
        </>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;