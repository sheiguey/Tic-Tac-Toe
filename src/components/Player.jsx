import { useState } from "react"

export default function Player({name,symbol}){
    const [isEditing,setIsEditing]=useState(false);

    function handleClick(){
        setIsEditing(()=>!isEditing)
    }
    
    const playerName=<span className="player-name">{name}</span>;
    const input =<input type="text" required />;

    return (
        <li className="player">
        <span className="player">
          {!isEditing && playerName}
          {isEditing && input}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{!isEditing?"Edit":"Save"}</button>
      </li>
    )
}