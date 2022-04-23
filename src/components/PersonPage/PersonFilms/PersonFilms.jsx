import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { changeHTTP, getConcurrantRequest } from '@utils/network';

import styles from './PersonFilms.module.css';

const PersonFilms = ({personFilms}) => {
  const [filmsName, setFilmsName] = useState([])
  
  useEffect(() => {
    (async () => {
      const urlHttps = personFilms.map(film => changeHTTP(film))
      const response = await getConcurrantRequest(urlHttps)
      
      setFilmsName(response)
    })()

    
  }, [])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}> 
        {
          filmsName && filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({title, episode_id}) => 
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.episode}>Episode: {episode_id}</span>
              <span className={styles.colon}>:</span>
              <span className={styles.title}>{title}</span>
            </li>
          )
        }

      </ul>
    </div>
  )
}
PersonFilms.propTypes = {
  personFilms: PropTypes.array,
}

export default PersonFilms;