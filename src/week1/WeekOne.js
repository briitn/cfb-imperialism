import { useState } from "react"
import { weekOneSchedule } from "../schedule"
import './week1.css'

const WeekOne= ()=>{
    const pictures=["./Illinois-logo.svg", "./Iowa-logo.png","./Maryland-Terrapins-logo.png","./Michigan-state-logo.png","./Minnesota-Logos.png", "./Nebraska-logo.jpeg","./Northwestern-logo.png","./Penn-state-logo.png", "./Purdue-Boilermakers-logo.png", "./Rutgers-logo.gif", "./Wisconsin-Badgers-logo.png"]
const holdWinners=[]
const [holdHoldWinners, setHoldHoldWinners]=useState()
console.log(document.querySelector('defs'))
const [whoWon, setWhoWon]=useState('')
    const [simulated, setSimulated]=useState(false)
    const genOdds=()=>{
        setSimulated(true)
        for (const game of weekOneSchedule){
            const rng=(Math.random())
          let wTeam
            if (rng<=game.favorite_win_odds){
                wTeam=game.favorite
                const winner=`${game.favorite} wins`
        holdWinners.push(winner)
            }
            else{
             if(game.home!==game.favorite){
                wTeam=game.home
               const winner=` upset alert ${game.home} wins`
       holdWinners.push(winner)
             }
             else if(game.away!==game.favorite){
                wTeam=game.away
                const winner=` upset alert ${game.away} wins`
                holdWinners.push(winner)
             }
          
            }
       
            if (wTeam===game.away){
                console.log(document.getElementById('Michigan1'))
                const getWinningPath=(document.querySelector(`path[data-name=${game.home_state}]`))
                getWinningPath.setAttribute("fill", `url(#${game.away}1)`);
             
               
              
            }
            else{
                const getWinningPath=(document.querySelector(`path[data-name=${game.home_state}]`))
                getWinningPath.setAttribute("fill", `white`);
              
            }
        
            }
setHoldHoldWinners(holdWinners)
    }


    return(
<div>
    <button onClick={genOdds}>
        simulate
    </button>
   
    {simulated ?
  holdHoldWinners?.map((winner) => (
    <p>{winner}</p>
  ))
  :
  <p></p>
}


 
</div>
    )

}


export default WeekOne