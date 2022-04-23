import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import {withErrorApi} from "@hoc-helpers/withErrorApi";
import { GET_PERSON_DATA } from '@constants/api'
import { getAllData } from '@utils/network';
import { getPeopleImg } from '@services/getId';

import styles from './PersonPage.module.css'
import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack';

const PersonPage = ({match, setErrorApi}) => {

  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState()

  
  const id = useParams(match).id
  
  useEffect(() => {
    (async () => {
      const res = await getAllData(`${GET_PERSON_DATA}/${id}/`)

      if(res){
        setPersonInfo([
          {title: 'Height', data: res.height },
          {title: 'Mass', data: res.mass },
          {title: 'Hair color', data: res.hair_color },
          {title: 'Skin color', data: res.skin_color },
          {title: 'Eye color', data: res.eye_color },
          {title: 'Height', data: res.height },
          {title: 'Birth year', data: res.birth_year },
          {title: 'Gender', data: res.gender },
        ])

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
              <PersonPhoto personPhoto={personPhoto} personName={personName}/>  
              {personInfo && <PersonInfo personInfo={personInfo} />}
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