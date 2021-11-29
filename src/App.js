// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
  * 
  * @type {React.FC}
  */
  export const App = () => {

    const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
    const randomDoge = async () => {
      await fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setDogUrl(data.message))
    }
    return (
      <header>
        <h1>Dogアプリ</h1>
        <p>犬の画像を表示します</p>
        <img src={dogUrl}></img>
        <button onClick={randomDoge}>更新</button>
      </header>
    )
  }
