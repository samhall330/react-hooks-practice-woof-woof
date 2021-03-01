import React from "react";

function DogInfo({ name, isGoodDog, image, goodDog, setGoodDog}){

    function handleClick(){
        return(
            setGoodDog(!goodDog)
        )
    }

    return(
        <div id="dog-info">
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <button onClick={handleClick}>{isGoodDog? "Good" : "Bad"} Dog!</button>
        </div>
    )
}


export default DogInfo;