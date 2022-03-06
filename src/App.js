// DO NOT DELETE

import React from 'react'
import './App.css'
import {Description} from './Description';
import {Header} from './Header'
import {DogListContainer} from './DogListContainer'

/**
  * 
  * @type {React.FC
      *   object-fit: contain;}
  */
  export const App = () => {
    return (
      <>
        <Header />
        <div id="app_main">
          <DogListContainer />
          <Description />
        </div>
      </>
    )
  }
