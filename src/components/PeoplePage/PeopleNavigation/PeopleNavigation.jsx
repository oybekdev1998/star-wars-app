import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({
  prevPage, nextPage, counterPage, getPeople
}) => {
 
  const prevHandler = () => getPeople(prevPage);
  const nextHandler = () => getPeople(nextPage);

  return (
    <div>
      <Link className={styles.link} to={`/people/?page=${counterPage-1}`} >
        <button 
          onClick={prevHandler}
          disabled={!prevPage} 
          className={styles.buttons}
        >Prev</button>
      </Link>
      <Link className={styles.link} to={`/people/?page=${counterPage+1}`} >
        <button 
          onClick={nextHandler}
          disabled={!nextPage} 
          className={styles.buttons}
        >Next</button>
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getPeople: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number
}
export default PeopleNavigation