import React from 'react';
import {Routes, Route} from 'react-router-dom';

import PeoplePage from '@containers/PeoplePage/PeoplePage';
import Header from '@components/Header/Header';
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import PersonPage from '@PersonPage/PersonPage';
import styles from './App.module.css'
import FavoritePerson from '../FavoritePerson/FavoritePerson';
import SearchPerson from '../SearchPage/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
function App() {
  return (
    <div className={styles.wrapper}>
        <Header />
      <Routes>
        <Route path="/" exact element={<Home />}  />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/people/:id" element={<PersonPage/>}/>
        <Route path="/favorites" element={<FavoritePerson />}/>
        <Route path="/search" element={<SearchPerson />}/>
        <Route path="/fail" element={<ErrorMessage />}/>
      </Routes>
    </div>
  );
}

export default App;
