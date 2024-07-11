import { useState } from "react"

export default function Player({intitialPalyerName,symbol}){
    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(intitialPalyerName)
    function handleClick(){
        setIsEditing(()=>!isEditing)
    }

    function handleInput(e){
        setPlayerName(e.target.value)
    }
    
    const editablePlayerName=<span className="player-name">{playerName}</span>;
    const input =<input type="text" required value={playerName} onChange={handleInput}/>;

    return (
        <li className="player">
        <span className="player">
          {!isEditing && editablePlayerName}
          {isEditing && input}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{!isEditing?"Edit":"Save"}</button>
      </li>
    )
}