// DO NOT DELETE
import React from 'react';
export const BreedsSelect = ({breeds, selectedBreed, setSelectedBreed}) => {

  const onChangeBreedSelect = (e) =>{
    setSelectedBreed(e.target.value)
  }
  return (
    <>
    <select value={selectedBreed} onChange={onChangeBreedSelect}>
      {breeds.map((breed, index) => (
        <option key={index} value={breed}>
          {breed}
        </option>
      ))}
    </select>
    </>
  )
}