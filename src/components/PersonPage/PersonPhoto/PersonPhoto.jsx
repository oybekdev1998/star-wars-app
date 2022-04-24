import React from 'react';
import { useDispatch } from 'react-redux';

import { addPerson } from '@store/actions/setPerson';
import { removePerson } from '@store/actions/setPerson';
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({favoritePerson, setFavoritePerson, personPhoto, personName, personId}) => {
  
  const dispatch = useDispatch()
  
  const setAddPerson = () => {
    dispatch(addPerson({
      [personId]: {
        name:personName,
        img: personPhoto,
      }
    }))
  }
  const setRemovePerson = () => {
    dispatch(removePerson(personId))
  }

  return (
    <div className={styles.container}>
      <img className={styles.person__photo} src={personPhoto} alt={personName} />
      <button onClick={setAddPerson}>ADD PERSON</button>
      <button onClick={setRemovePerson}>REMOVE PERSON</button>
    </div>
  )
}

export default PersonPhoto;