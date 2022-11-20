import React from 'react';
import './App.css';
import Die from './Die.js';
import {nanoid} from "nanoid"


function App() {
  const [dice,setDice]= React.useState(allNewDice())

  function generateNewDie(){
    return{
         value: Math.ceil(Math.random() * 6), 
          isHeld: false,
          id: nanoid()
    }
  }

  function allNewDice()
    {
      const newDice=[];
      for(let i=0; i<10;i++){
        newDice.push(generateNewDie())
      }
      console.log(newDice)
      return newDice
    }

    function rollDice(){
      setDice(oldDice => oldDice.map(die =>{
        return die.isHeld ?
          die:
          generateNewDie()
          
      }))
    }
    function holdDice(id) {
      setDice(oldDice => oldDice.map(die =>{
        return die.id === id ?
          {...die,isHeld: !die.isHeld}:
          die
      }))
    }

    const diceElements = dice.map(die => 
       <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  return (
  <main>
    <div className="App">
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
 