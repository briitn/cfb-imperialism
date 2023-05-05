import { useState } from "react";
import { Schedule } from "../schedule";
import './results.css'
import pictures from "../pictures";
const Results=({week, countUp})=>{
console.log(Schedule['week5'])
 const holdWinners=[]

  const [y, setY]=useState(0)

  console.log(y)
    let rng = Math.random();
function simulateGame(game) {
    let teamA_score = 0;
    let teamB_score = 0;
    let count=0
    while (count<4) {
      
      for (let i=0; i<5;i++){
         const team1Prob = game.home_rating / 10;
         const team2Prob = game.away_rating / 10;
    
         if (rng <= 0.5) {
            const randNum = Math.random();
            if (randNum <=team1Prob/1.2) {
            const fgOrTd=Math.random()
            fgOrTd<0.5?teamA_score+=7:teamA_score+=3
             
              rng=0.6
            } 
            else{
                rng=0.6
            }
            i++;
         } else if (rng >=0.5) {
        
            const randNum = Math.random();
         
            if (randNum <=team2Prob/1.2) {
                const fgOrTd=Math.random()
                fgOrTd<=0.5?
                teamB_score+=7
                :teamB_score+=3
              rng=0.4
            } 
            else{rng=0.4}
            i++;
         }
    
        }
        count+=1;
      }   
        return [teamA_score, teamB_score]
  }
  for(const game of Schedule[`${week}`]){
    const score = simulateGame(game);
 const p=<table>
 <tbody>
   <tr>
     <td><img src={pictures.find(item=>{
        return item.includes(game.home)})} width='10px'/>{game.home}         {score[0]}</td>
   </tr>
   <tr>
        <td>
        <img src={pictures.find(item=>{
        return item.includes(game.away)})} width='20px'/>
            {game.away}        {score[1]}</td>
   </tr>
 </tbody>
</table>
 holdWinners.push(p)
 let wTeam
   if (score[0]>score[1]){
    wTeam=game.home
   }
   else if (score[1]>score[0]){
    wTeam=game.away
   }
   else{
 
   }

   if (wTeam===game.away){

    const getHomePath=(document.querySelector(`path[data-name="${game.home_state}"]`))
    let fillValue = getHomePath.getAttribute("fill");
  
    if (fillValue.includes('url')){
        console.log(countUp+5)
      const splitFill=fillValue.split('(')[1]
const filledPattern= document.getElementById(splitFill.slice(1,-1))
const findPic=pictures.find(item => item.includes(`${game.away}`));
const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
image.setAttribute('href', `${findPic}`);
image.setAttribute('width', '20');
image.setAttribute('height', '20');
image.setAttribute('x', `${countUp*5}`);
image.setAttribute('y', `${countUp+5}`);
filledPattern.appendChild(image);
    }
   else{
    const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    const rng=Math.random()
    pattern.setAttribute('id', `${game.away}${rng}`);
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    pattern.setAttribute('width', '1');
    pattern.setAttribute('height', '1');
    pattern.setAttribute('x', '50%');
    pattern.setAttribute('y', '50%');
    pattern.setAttribute('patternUnits','xMidYMid slice')
    const findPic=pictures.find(item => item.includes(`${game.away}`));
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    image.setAttribute('href', `${findPic}`);
    image.setAttribute('width', '20');
    image.setAttribute('height', '20');
    pattern.setAttribute('preserveAspectRatio','ObjectBoundingBox')
    pattern.appendChild(image); 
    const defs = document.querySelector('defs');
    defs.appendChild(pattern);
    getHomePath.setAttribute("fill", `url(#${game.away}${rng})`);
   }
}
 }

return(
    <>

    <div className="holdResultsTable">
    <div className="resultsTable">
{holdWinners.map(item=>(
  item  
))}
    </div>
    </div>
    </>
)
}

export default Results
{/* <table>
  <tbody>
    <tr>
      <td>{game.home}{score[0]}</td>
    </tr>
    <tr>
         <td>{game.away}{score[1]}</td>
    </tr>
  </tbody>
</table> */}
