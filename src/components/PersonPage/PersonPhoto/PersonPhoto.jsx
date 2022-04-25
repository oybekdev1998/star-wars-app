import React from 'react';
import { useDispatch } from 'react-redux';

import { addPerson } from '@store/actions/setPerson';
import { removePerson } from '@store/actions/setPerson';

import iconFill from './img/favorite-fill.svg';
import icon from './img/favorite.svg';
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({favoritePerson, setFavoritePerson, personPhoto, personName, personId}) => {
  
  const dispatch = useDispatch()
  
  const setPersonHandler = () => {
    if(!favoritePerson) {
      dispatch(addPerson({
        [personId]: {
          name:personName,
          img: personPhoto,
        }
      }))
      setFavoritePerson(true)
      
    } else {
      dispatch(removePerson(personId))
      setFavoritePerson(false)
    }
  }

  return (
    <div className={styles.container}>
      <img className={styles.person__photo} src={personPhoto} alt={personName} />
      <img 
        className={styles.person__icon}
        onClick={setPersonHandler}
        src={favoritePerson ? iconFill: icon}
        alt='Favorite icon'
     /> 
      
    </div>
    

  )
}

export default PersonPhoto;