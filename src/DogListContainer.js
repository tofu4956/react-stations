// DO NOT DELETE
import React from 'react'
import {BreedsSelect} from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([]);
  const [selectedBreed, setSelectedBreed] = React.useState("terrier");
  const [dogsUrl, setDogsUrl] = React.useState([]);
  React.useEffect(() => {
      fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setBreeds(Object.keys(data.message)))
    },[])
    return (
      <>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
          dogsUrl={dogsUrl}
          setDogsUrl={setDogsUrl} />
      </>
    )
  }