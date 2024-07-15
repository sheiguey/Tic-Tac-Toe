import { useState } from "react";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns,setGameTurns]= useState([]);

  function handleSelectSquare(rowIndex,colIndex) {
    setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X");

    setGameTurns(prevGameTurns=>{
       let currentPlayer='X';
       if(gameTurns.length>0 && prevGameTurns[0].player==='X'){
           currentPlayer='O'
       }
      const turns= [
        {square:{row:rowIndex,col:colIndex},player:currentPlayer},
        ...prevGameTurns
      ]

      return turns;
    });
  }

  return (
    <>
      <main id="game-container">
        <ol id="players" className="highlight-player">
          <Player intitialPalyerName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player intitialPalyerName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <div>
          <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
      </main>
      <Log />
    </>
  )
}

export default App
