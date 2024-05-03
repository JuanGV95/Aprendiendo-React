import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) =>{
    for (const combo of WINNER_COMBOS){
      const[a,b,c] = combo
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

export const checkEndGame = (newBoard) =>{
    //revisar si hay un empate, al llenar todos los espacios si no hay ganador 
    return newBoard.every((square)=> square !== null)
  }  