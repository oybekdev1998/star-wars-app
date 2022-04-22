import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UiButton from '@UI/UiButton/UiButton'
import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({
  prevPage, nextPage, counterPage, getPeople
}) => {
 
  const prevHandler = () => getPeople(prevPage);
  const nextHandler = () => getPeople(nextPage);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/people/?page=${counterPage-1}`} >
        <UiButton
          text='Previous' 
          onClick={prevHandler}
          disabled={!prevPage} 
          className={styles.buttons}
        ></UiButton>
      </Link>
      <Link className={styles.link} to={`/people/?page=${counterPage+1}`} >
        <UiButton
          text='Next' 
          onClick={nextHandler}
          disabled={!nextPage} 
          className={styles.buttons}
        ></UiButton>
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