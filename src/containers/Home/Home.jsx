import React from 'react'
import ChooseSide from '@components/HomePage/ChooseSide/ChooseSide';

import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>Choose side</h1>
      <ChooseSide />
    </>
  )
}

export default Home;