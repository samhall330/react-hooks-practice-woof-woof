import React, { useState, useEffect } from "react";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])
  const [goodDog, setGoodDog] = useState(true)

  useEffect(() => {
    fetch ("http://localhost:3001/pups")
    .then(response => response.json())
    .then(setDogs)
  }, [])

  function onDogClick(e){
    console.log(e)
    return(
      dogs.map((dog) => {
        return(
        < DogInfo 
        key={dog.id}
        id={dog.id}
        name={dog.name}
        isGoodDog={dog.isGoodDog}
        image={dog.image}
        goodDog={goodDog}
        setGoodDog={setGoodDog}
        />
        )
      })
    )
  }

  const dogInfo = onDogClick()

  function dogNames(){ 
    return(
      dogs.map((dog) => {
      return(
        <span onClick={onDogClick} id="dog-bar">{dog.name}</span>)
      })
    )
  }

  const dogName = dogNames()


  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        {dogName}
      </div>
      <div id="dog-summary-container">
        <h1>DOG:</h1>
        <div id="dog-info">
          {dogInfo}
        </div>
      </div>
    </div>
  );
}

export default App;
