import { useState } from 'react';
import './App.css';
// for reference:
// https://members.tripod.com/~Tamagotchi_Central/instructions.html
/*
  RENDER SCREENS
    Create Pet:
    * select name
    * select type
    * save data to localstorage
    Play Pet:
    * drag food to it to feed
    * click and drag mouse on head to pet
    * drag ball to it to play
    * keeps track of time, 1 day: hungry, 2 day: starving, 3 day: dead
    Datum:
    * delete all pet data
    * about project
  DATA
*/
function Pet(props){
  let moods = {
    happy:"./img/happy.png", 
    default:"./img/default.png",
    sad:  "./img/sad.png"
  };

  return(
      <img src={moods[props.mood]} id="pet"/>
  );
}
function PetHandler(props){
  return(
    <div id="mood-changer" onClick={props.onclick}></div>
  );
}

function App() {
  let [mood, setMood] = useState("happy");
  // if no localstorage data, render selection/ creation form
  // if so, render the pet page

  function nextMood(){
    if(mood=="happy") setMood("default");
    else if(mood=="default") setMood("sad");
    else if(mood=="sad") setMood("happy")
  }

  let one = _ =>{
    console.log("one");
    setMood("happy");
  }
  let two = _ =>{
    console.log("two");
    setMood("default");
  }
  let three = _ =>{
    console.log("three");
    setMood("sad");
  }

  return (
    <div className="App">
      <div id="pet-offset"></div>
      <div id="pet-holder">
        <PetHandler onclick={nextMood}/>
        <Pet mood={mood}/>
      </div>
      <div id="button-holder">
        <button id="enu-button" onClick={one}> </button>
        <button id="enu-button" onClick={two}> </button>
        <button id="enu-button" onClick={three}> </button>
      </div>
    </div>
  );
}

export default App;
