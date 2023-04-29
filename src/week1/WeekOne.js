import { useState } from "react"

const WeekOne= ()=>{
const [whoWon, setWhoWon]=useState('')
    const [simulated, setSimulated]=useState(false)
    const genOdds=()=>{
        setSimulated(true)
        const rng=(Math.random()*10).toFixed()
      
if (rng<=6){setWhoWon(true)
}
else{setWhoWon(false)}

    }


    return(
<div>
    <p>Michigan Vs Ohio state</p>
    <button onClick={genOdds}>
        simulate
    </button>
   
    {simulated ?
  (whoWon ?
    <p>Ohio state wins</p> : <p>Michigan wins</p>
  ) :
  <p></p>
}

 
</div>
    )

}


export default WeekOne