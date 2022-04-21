import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {withErrorApi} from "@hoc-helpers/withErrorApi";
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList';
import {getAllData} from "@utils/network";
import {GET_PEOPLE_DATA} from "@constants/api";
import {getPeopleId, getPeopleImg} from '@services/getId'

import styles from './PeoplePage.module.css'

const PeoplePage = ({setErrorApi}) => {
  const [people, setPeople] = useState(null)

  const getPeople = async (url) => {
    const res = await getAllData(url)
    
    if(res){
      const peopleList = res.results.map(({name, url}) =>{
        const id = getPeopleId(url);
        const img = getPeopleImg(id)
        return {
          name,
          id,
          img
        }
      })
      setPeople(peopleList)
      setErrorApi(false)

    }else{
      setErrorApi(true)
    }


  }


  useEffect(() => {
    getPeople(GET_PEOPLE_DATA)
  },[]);

  return (
    <>
      {people && <PeopleList people={people}/>}
    </>
  )
}

PeoplePage.propTypes = {
  people: PropTypes.array,
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);