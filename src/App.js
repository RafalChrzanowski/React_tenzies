import React from 'react';
import './App.css';
import Die from './Die.js';
import {nanoid} from "nanoid"


function App() {
  const [dice,setDice]= React.useState(allNewDice())

  function allNewDice()
    {
      const newDice=[];
      for(let i=0; i<10;i++){
        newDice.push({
          value: Math.ceil(Math.random() * 6), 
          isHeld: true,
          id: nanoid()
      })
      }
      console.log(newDice)
      return newDice
    }

    function rollDice(){
      setDice(allNewDice())
    }

    const diceElements = dice.map(die => 
       <Die key={die.id} value={die.value} isHeld={die.isHeld}/>)

  return (
  <main>
    <div className="App">
      <header></header>
      <div className="AppBody">
        <div className="Center">
          {diceElements}
        </div>
        <button className='rollButton' onClick={rollDice}>Roll</button>
      </div>
    </div>
  </main>
  );
}

export default App;
 