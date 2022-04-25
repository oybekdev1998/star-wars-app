import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styles from './PeopleList.module.css'

const PeopleList = (people) => {
  
    return (
        <>
          <ul className={styles.list__container}>
            {people.people.map(({img, id, name}) => {
              return (
                <Link to={`/people/${id}`} key={id}>
                  <li className={styles.list__item}>
                    <img className={styles.list__img} src={img} alt={name} />
                    <p className={styles.list__title}>{name}</p>
                  </li>
                </Link>
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