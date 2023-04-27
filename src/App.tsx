import React, { Component } from 'react';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ToastMessage from 'components/generics/toast-message/ToastMessage';
import { Main } from './components/Main';
//import './components/style.css';
import {Routes,Route} from 'react-router-dom'
import { Marvel } from './components/Marvel'

import RouteComponent from 'routes/RouteComponent';

import styles from './App.module.scss';

function App() {

  return (
    
    <ToastMessage>
      <div id={styles.applicationMain}>
        <Header />
        <RouteComponent />
        <Routes>
       <Route path='/'element={<Main/>}/>
       <Route path='/:id' element={<Marvel/>}/>
     </Routes>
        <Footer />
      </div>
    </ToastMessage>
  );
}

export default App;
