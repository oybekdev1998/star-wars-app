import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash'

import {getPeopleId, getPeopleImg} from '@services/getId';
import { GET_SEARCH_DATA } from '@constants/api';
import { getAllData } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import UiInput from '@UI/UiInput/UiInput'
import SearchInputInfo from '@components/SearchInput/SearchInputInfo/SearchInputInfo'

import styles from './SearchPage.module.css';

const SearchPage = ({setErrorApi}) => {

  const [inputChangeValue, setInputChangeValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async param => {
    const res = await getAllData(GET_SEARCH_DATA+param)

    if(res){
      const peopleList = res.results.map(({name, url}) => {

        const id = getPeopleId(url)
        const img = getPeopleImg(id)

        return {
          name,
          id,
          img,
        }
      })
      setErrorApi(false)
      setPeople(peopleList)
    }else{
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResponse('')
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetResponse = useCallback(debounce(value => getResponse(value), 300), []);
  
  const handleInput = value => {
    setInputChangeValue(value)
    debouncedGetResponse(value)
  }
  return (
    <div className={styles.container}>
      <h1 className='header__text'>Search</h1>
      <UiInput
        classes={styles.input__search}
        value={inputChangeValue}
        handleInputChange={handleInput}
        placeholder="Input character's name"
      />
      
      <SearchInputInfo people={people} />
    </div>
  )
}

export default withErrorApi(SearchPage);