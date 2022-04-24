import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const FavoritePerson = () => {

  const storeData = useSelector(state => state.favoriteReducer)

  console.log(storeData);
  return (
    <div>
      <Link to={'/favorites'}>
          FavoritePerson
      </Link>
    </div>
  )
}

export default FavoritePerson