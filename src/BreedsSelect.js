// DO NOT DELETE
import React from 'react';
import {DogImage} from './DogImage'
export const BreedsSelect = ({breeds, selectedBreed, setSelectedBreed, dogsUrl, setDogsUrl}) => {
  const onChangeBreedSelect = (e) => {
    setSelectedBreed(e.target.value)
  }
  const onClickSelectListener = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(data => setDogsUrl(data.message))
  }
  return (
    <>
      <div id="doglist">
        <div className="listpane">
          <p>犬種リスト</p>
            <select value={selectedBreed} onChange={onChangeBreedSelect}>
              {breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
            </select>
          </div>
        <button onClick={onClickSelectListener}>選択</button>
      </div>
      <div className="dog-list-item">
        {dogsUrl.map((url, index) => (
          <img className="img-list" key={index} src={url} />
        ))}
      </div>
    </>
  )
}