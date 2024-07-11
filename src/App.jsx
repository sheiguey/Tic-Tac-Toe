import Player from "./components/player"

function App() {
  return (
    <main id="game-container">
      <ol id="players">
        <Player intitialPalyerName="Player 1" symbol="X" />
        <Player intitialPalyerName="Player 2" symbol="O" />
      </ol>
      <div>
       GAME BOARD
      </div>
    </main>

  )
}

export default App
