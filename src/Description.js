// DO NOT DELETE
import * as React from 'react';
import DogImage from './DogImage';

const Description = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  const randomDoge = async () => {
    await fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
  }
  return (
    <div className="image-item">
      <DogImage url={dogUrl} />
      <button onClick={randomDoge}>更新</button>
    </div>
  )
}

export default Description