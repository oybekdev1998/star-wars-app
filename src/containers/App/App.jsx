import React from 'react'
import styles from './App.module.css'
import PeoplePage from '../../containers/PeoplePage/PeoplePage'
function App() {
  return (
    <div className={styles.header}>
        <PeoplePage />
    </div>
  );
}

export default App;
