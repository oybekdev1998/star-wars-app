import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {withErrorApi} from "@hoc-helpers/withErrorApi";
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList';
import {getAllData} from "@utils/network";
import {GET_PEOPLE_DATA} from "@constants/api";
import {getPeopleId, getPeopleImg, getPeoplePageId} from '@services/getId'
import {useQueryParams} from "@hooks/useQueryParams";
import {changeHTTP} from "@utils/network";

import styles from './PeoplePage.module.css'
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation/PeopleNavigation';

const PeoplePage = ({setErrorApi}) => {

  const query = useQueryParams()
  const queryPage = query.get('page')


  const [people, setPeople] = useState(null)
  const [prevPage, setPrevPage] = useState()
  const [nextPage, setNextPage] = useState()
  const [counterPage, setCounterPage] = useState()


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
      setPrevPage(changeHTTP(res.previous))
      setNextPage(changeHTTP(res.next))
      setCounterPage(getPeoplePageId(url))

      setErrorApi(false)

    }else{
      setErrorApi(true)
    }


  }


  useEffect(() => {
    getPeople(GET_PEOPLE_DATA+queryPage)
  },[]);

  return (
    <>
      <PeopleNavigation
        getPeople={getPeople}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people}/>}
    </>
  )
}

PeoplePage.propTypes = {
  people: PropTypes.array,
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);