const initialGameBoad= [
 [null,null,null],
 [null,null,null],
 [null,null,null],

]

export default function GameBoard({turns,onSelectSquare}) {
let gameBoard = initialGameBoad;

for(const turn of turns){
    const {square,player}=turn;
    const {row,col} = square;
    gameBoard[row][col]=player;
}
/* const [GameBoard,setGameBoard]=useState(initialGameBoad);

function updateGameBoard(rowIndex,colIndex){
    setGameBoard((prevGameBoard)=>{
       const updatedGameBoardArr=[...prevGameBoard.map(inerArr=>[...inerArr])];
       updatedGameBoardArr[rowIndex][colIndex]=activePlayerSymbol;
       return updatedGameBoardArr;
    });

    onSelectSquare();
} */

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, symbolKey) => (
                            <li key={symbolKey}><button onClick={()=>onSelectSquare(row,rowIndex)}>{playerSymbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}