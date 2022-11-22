import React from 'react';
import './App.css';
import Die from './Die.js';
import {nanoid} from "nanoid"
import Confetti from "react-confetti"


function App() {
  const [dice,setDice]= React.useState(allNewDice())
  const[tenzies,setTeznies]= React.useState(false)

  React.useEffect(() => {
    const allHeld=dice.every(die => die.isHeld)
    const firstValue=dice[0].value
    const allSameValue=dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTeznies(true)
      console.log("you won!")
    }
    console.log("Dice state changed")
  },[dice]) 

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
      if(!tenzies){
      setDice(oldDice => oldDice.map(die =>{
        return die.isHeld ?
          die:
          generateNewDie()
          
      }))
    }else{
      setTeznies(false)
      setDice(allNewDice())
    }
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
    {tenzies && <Confetti />}
    <div className="App">
      <div className="AppBody">
        <h1>Tenzies</h1>
        <div className="Center">
          {diceElements}
        </div>
        <button className='rollButton' onClick={rollDice}>{tenzies ? "New game" : "Roll"}</button>
      </div>
    </div>
  </main>
  );
}

export default App;
 