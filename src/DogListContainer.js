// DO NOT DELETE
import React from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([]);
  React.useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setBreeds(data.message))
    }, [])
    return (<></>)
  }