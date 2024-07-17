import { useState } from "react";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from  './winning-combinations'

const PLAYERS = {
  'X':'Player 1',
  'O':'Player 2'
}


const INITIAL_GAME_BOARD= [
  [null,null,null],
  [null,null,null],
  [null,null,null],
 ]

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(item=>[...item])];
  for(const turn of gameTurns){
    const {square,player}=turn;
    const {row,col} = square;
    gameBoard[row][col]=player;
}

return gameBoard;
}


function deriveWinner(Players,gameBoard){
  let winner;

  for (const combination of WINNING_COMBINATIONS){
    const firstSquareCombination =gameBoard[combination[0].row][combination[0].column];
    const secondSquareCombination=gameBoard[combination[1].row][combination[1].column];
    const thirdSquareCombination=gameBoard[combination[2].row][combination[2].column];

    if(firstSquareCombination && firstSquareCombination===secondSquareCombination && secondSquareCombination===thirdSquareCombination){
      winner =Players[firstSquareCombination];
    }
  }
  return winner;
}


function deriveActivePlayer(gameturns) {
  let currentPlayer='X';
  if (gameturns.length > 0 && gameturns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
};


function App() {
   
  const [players,setPlayers]=useState(PLAYERS);

  const [gameTurns,setGameTurns]= useState([]);
 
  const activePlayer= deriveActivePlayer(gameTurns);
  
  const gameBoard = deriveGameBoard(gameTurns);
  
  const winner = deriveWinner(players,gameBoard);

  const hasDraw = gameTurns.length===9 && !winner;

  function handleSelectSquare(rowIndex,colIndex) {
    setGameTurns((prevGameTurns)=>{
       let currentPlayer=deriveActivePlayer(prevGameTurns);
       if(gameTurns.length>0 && prevGameTurns[0].player==='X'){
           currentPlayer='O';
       }

      const turns= [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer },
        ...prevGameTurns,
      ];

      return turns;
    });
  }

  function resetGame(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol,newName){
     setPlayers(prevPlayers=>{
       return {
        ...prevPlayers,
        [symbol]:newName
       }
     })
  }

  return (
    <>
      <main id="game-container">
        <ol id="players" className="highlight-player">
          <Player intitialPalyerName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
          <Player intitialPalyerName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
        </ol>
        <div>
          {(winner || hasDraw ) && <GameOver winner={winner} rematch={resetGame}/>}
          <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
        </div>
      </main>
      <Log  turns={gameTurns}/> 
    </>
  )
}

export default App
