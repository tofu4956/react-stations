// DO NOT DELETE

import * as React from 'react'
import './App.css'
import Description from './Description';
import Header from './Header';

/**
  * 
  * @type {React.FC
      *   object-fit: contain;}
  */
  export const App = () => {
    return (
      <>
        <Header/>
        <div id="app_main">
          <p className="description-item">犬の画像を表示します</p>
          <Description />
        </div>
      </>
    )
  }
