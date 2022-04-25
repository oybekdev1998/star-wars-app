import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList/PeopleList'


const FavoritePerson = () => {
  const [people, setPeople] = useState([])
  const storeData = useSelector(state => state.favoriteReducer)

  
  useEffect(() => {
    const arr = Object.entries(storeData)
    console.log(arr);
  }, [])
  return (
    <div>
      <Link to={'/favorites'}>
          <PeopleList people={people} />
      </Link>
    </div>
  )
}

export default FavoritePerson