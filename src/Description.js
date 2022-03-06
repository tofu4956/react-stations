import React from 'react';
import {DogImage} from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  const randomDoge = async () => {
    await fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
  }
  return (
    <>
      <p className="description-item">犬の画像を表示します</p>
      <div className="image-item">
        <DogImage url={dogUrl} />
        <button onClick={randomDoge}>更新</button>
      </div>
    </>
  )
}