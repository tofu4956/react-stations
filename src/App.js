// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
  * 
  * @type {React.FC}
  */
  export const App = () => {

    const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
    return (
      <header>
        <h1>Dogアプリ</h1>
        <p>犬の画像を表示します</p>
        <img src={dogUrl}></img>
        <button onClick={() => setDogUrl("images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")}>更新</button>
      </header>
    )
  }
