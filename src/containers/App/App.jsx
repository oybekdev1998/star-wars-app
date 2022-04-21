import React from 'react';
import {Routes, Route} from 'react-router-dom';

import PeoplePage from '@containers/PeoplePage/PeoplePage';
import Header from '@components/Header/Header';
import Home from "../Home/Home";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
        <Header />
      <Routes>
        <Route path="/" exact element={<Home />}  />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/not-found" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
