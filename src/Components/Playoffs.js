
import pictures from "../pictures"


function Playoffs ({standings}){
    const simGame1=()=>{
        let teamA_score = 0;
        let teamB_score = 0;
        let quater = 1;l
        let flipCoin = Math.random();
        while (quater < 5) {
    
            for (let i = 0; i < 5; i++) {
                if (flipCoin <0.5) {
                    const randNum = Math.random();
                    if (randNum <0.6) {
                        const fgOrTd = Math.random();
                        if (fgOrTd < 0.8) {
                            teamA_score += 7;
                        } else {
                            teamA_score += 3;
                        }
                        flipCoin = 0.6;
                    } else {
                        flipCoin = 0.6;
                    }
                    i++;
                } else if (flipCoin >0.5) {
                    const randNum = Math.random();
                    if (randNum >0.6) {
                        const fgOrTd = Math.random();
                        if (fgOrTd <= 0.8) {
                            teamB_score += 7;
                        } else {
                            teamB_score += 3;
                        }
                        flipCoin = 0.4;
                    } else {
                        flipCoin = 0.4;
                    }
                     i++;
                 }
            }
            quater += 1;
        }   
        console.log([`${standings[0].team}(${teamA_score}), ${standings[3].team}(${teamB_score})`]);
    }
    const simGame2=()=>{
        let teamA_score = 0;
        let teamB_score = 0;
        let quater = 1;
        let flipCoin = Math.random();
        while (quater < 5) {
    
            for (let i = 0; i < 5; i++) {
                if (flipCoin <0.5) {
                    const randNum = Math.random();
                    if (randNum <=0.55) {
                        const fgOrTd = Math.random();
                        if (fgOrTd < 0.8) {
                            teamA_score += 7;
                        } else {
                            teamA_score += 3;
                        }
                        flipCoin = 0.6;
                    } else {
                        flipCoin = 0.6;
                    }
                    i++;
                } else if (flipCoin >0.5) {
                    const randNum = Math.random();
                    if (randNum >0.55) {
                        const fgOrTd = Math.random();
                        if (fgOrTd <= 0.8) {
                            teamB_score += 7;
                        } else {
                            teamB_score += 3;
                        }
                        flipCoin = 0.4;
                    } else {
                        flipCoin = 0.4;
                    }
                     i++;
                 }
            }
            quater += 1;
        }   
        console.log([`${standings[1].team}(${teamA_score}), ${standings[2].team}(${teamB_score})`]);
    }
    return(
<div className="table__container">
  <div className="table__container-content">
  <table key={Math.random()}>
<tbody>
  <tr>
    <td>
      <span>({standings[0].rank})</span><img src={pictures.find(item=>{
       return item.includes(standings[0].team)})} width='10px'/>{standings[0].team} </td>
  </tr>
  <h3>Vs</h3>
  <tr>
       <td>
       <span>({standings[3].rank})</span>    <img src={pictures.find(item=>{
       return item.includes(standings[3].team)})} width='20px'/>
           {standings[3].team}  </td>
  </tr>
</tbody>
<button onClick={simGame1}>Simulate</button>
</table>
<table key={Math.random()}>
<tbody>
  <tr>
    <td>
      <span>({standings[1].rank})</span><img src={pictures.find(item=>{
       return item.includes(standings[1].team)})} width='10px'/>{standings[1].team} </td>
  </tr>
  <h3>Vs</h3>
  <tr>
       <td>
       <span>({standings[2].rank})</span>    <img src={pictures.find(item=>{
       return item.includes(standings[2].team)})} width='20px'/>
           {standings[2].team}  </td>
  </tr>
</tbody>
<button onClick={simGame2}>Simulate</button>
</table>
</div></div>

)




}






export default Playoffs