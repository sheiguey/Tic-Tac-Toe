import Player from "./components/player"

function App() {
  return (
    <main id="game-container">
      <ol id="players">
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" />
      </ol>
      <div>
       
      </div>
    </main>

  )
}

export default App
