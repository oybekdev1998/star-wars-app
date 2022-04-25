import React, {useState, useEffect, Suspense} from 'react'
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {withErrorApi} from "@hoc-helpers/withErrorApi";
import { GET_PERSON_DATA } from '@constants/api'
import { getAllData } from '@utils/network';
import { getPeopleImg } from '@services/getId';

import styles from './PersonPage.module.css'
import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack';
import UiLoader from '@UI/UiLoader/UiLoader'

const PersonFilms = React.lazy(() => import ('@components/PersonPage/PersonFilms/PersonFilms'));

const PersonPage = ({match, setErrorApi}) => {

  const storeData = useSelector(state => state.favoriteReducer)
  

  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState([])
  const [favoritePerson, setFavoritePerson] = useState(false)

  
  const id = useParams(match).id

  
  
  useEffect(() => {
    (async () => {

      storeData[id] ? setFavoritePerson(true) : setFavoritePerson(false)
      
      const res = await getAllData(`${GET_PERSON_DATA}/${id}/`)

      if(res){
        setPersonInfo([
          {title: 'Height', data: res.height },
          {title: 'Mass', data: res.mass },
          {title: 'Hair color', data: res.hair_color },
          {title: 'Skin color', data: res.skin_color },
          {title: 'Eye color', data: res.eye_color },
          {title: 'Birth year', data: res.birth_year },
          {title: 'Gender', data: res.gender },
        ])
        res.films.length && setPersonFilms(res.films);
        setPersonName(res.name)
        setPersonPhoto(getPeopleImg(id))
        setErrorApi(false)

      }else{
        setErrorApi(true)
      }
    })()

    
    
  }, [])

  return (
      <>
        <PersonLinkBack />
        <div className={styles.wrapper}>
            <h1 className={styles.person__name}>{personName}</h1>

            <div className={styles.container}>
              <PersonPhoto 
                favoritePerson={favoritePerson}
                setFavoritePerson={setFavoritePerson}
                personId={id} 
                personPhoto={personPhoto} 
                personName={personName}/>  
              {personInfo && <PersonInfo personInfo={personInfo} />}
              {personFilms && <Suspense fallback={<UiLoader />}>
                <PersonFilms personFilms={personFilms} />
                </Suspense>}
            </div>
        </div>
      </>
  )
}

PersonPage.propTypes = {
  match: PropTypes.object,
  withErrorApi: PropTypes.func 
}

export default withErrorApi(PersonPage);