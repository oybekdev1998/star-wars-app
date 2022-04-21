import React, { useEffect, useState } from 'react';
import {getAllData} from "../../utils/network";
import {GET_PEOPLE_DATA} from "../../constants/api";
import {getPeopleId, getPeopleImg} from '../../services/getId'

import {withErrorApi} from "../../hoc-helpers/withErrorApi";

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';


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
      { people
        ? <PeopleList people={people}/>
        : <h1>Error</h1>
      }
    </>
  )
}

export default withErrorApi(PeoplePage);