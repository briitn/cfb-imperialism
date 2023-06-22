
import { Schedule } from "../schedule";
import './Simulation.css'
import simulateGame from "./Simulate";
import pictures from "../pictures";
import Rankings from "./Rankings";
import Playoffs from "./Playoffs";
const Simulation=({week, countUp, standings, simulate, showStandings})=>{
 const holdGames=[]
 const holdResults=[]
console.log(simulate)
 for (const game of Schedule[`${week}`]) {
  const { home, away } = game;
  const score = simulateGame(home, away);
  
  let winningTeam, losingTeam,losingRank, winningRank, scoreDiff, rankDiff ;
  if (score[0] > score[1]) {
    winningTeam = home.team_name;
    losingTeam = away.team_name;
    winningRank= home.ranking
    losingRank=away.ranking
  
   
    winningRank>losingRank?rankDiff=winningRank-losingRank:rankDiff=losingRank-winningRank
    
    scoreDiff=score[0]-score[1]
    holdResults.push({winningTeam,
  losingTeam,losingRank , winningRank, scoreDiff, rankDiff})
  } else if (score[1] > score[0]) {
    winningTeam =  away.team_name;
    losingTeam = home.team_name;
   winningRank = away.ranking
   losingRank=home.ranking
   winningRank>losingRank?rankDiff= winningRank-losingRank:rankDiff=losingRank-winningRank
   scoreDiff=score[1]-score[0]
  

    holdResults.push({winningTeam,
      losingTeam, losingRank, winningRank, scoreDiff, rankDiff})
  } else {
    continue; // In case of a tie, do nothing
  }

  // Update rankings
  
  standings.sort((a,b)=>a.rank-b.rank)


  // If no swap occurred, update the rankings normally


   if (winningTeam===away.team_name){
    const getHomePath=(document.querySelector(`path[data-name="${home.state}"]`))
    let fillValue = getHomePath.getAttribute("fill");
    if (fillValue.includes('url')){
      const splitFill=fillValue.split('(')[1]
const filledPattern= document.getElementById(splitFill.slice(1,-1))
const findPic=pictures.find(item => item.includes(`${away.team_name}`));
const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
image.setAttribute('href', `${findPic}`);
image.setAttribute('width', '20');
image.setAttribute('height', '20');
image.setAttribute('x', `${countUp*4}`);
image.setAttribute('y', `${countUp+5}`);
filledPattern.appendChild(image);
    }
   else{
    const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    const rng=Math.random()
    pattern.setAttribute('id', `${away.team_name}${rng}`);
    pattern.setAttribute('patternUnits', 'userSpaceOnUse');
    pattern.setAttribute('width', '1');
    pattern.setAttribute('height', '1');
    pattern.setAttribute('x', '60%');
    pattern.setAttribute('y', '40%');
    pattern.setAttribute('patternUnits','xMidYMid slice');
    const findPic=pictures.find(item => item.includes(`${away.team_name}`));
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    image.setAttribute('href', `${findPic}`);
    image.setAttribute('width', '20');
    image.setAttribute('height', '20');
    pattern.setAttribute('preserveAspectRatio','ObjectBoundingBox')
    pattern.appendChild(image); 
    const defs = document.querySelector('defs');
    defs.appendChild(pattern);
    getHomePath.setAttribute("fill", `url(#${away.team_name}${rng})`);
   }
} 
const table=<table key={Math.random()}>
<tbody>
  <tr>
    <td>
      <span>{home.ranking}</span><img src={pictures.find(item=>{
       return item.includes(home.team_name)})} width='10px'/>{home.team_name}         {score[0]}</td>
  </tr>
  <tr>
       <td>
       <span>{away.ranking}</span>    <img src={pictures.find(item=>{
       return item.includes(away.team_name)})} width='20px'/>
           {away.team_name}      {score[1]}</td>
  </tr>
</tbody>
</table>
 holdGames.push(table)
 };
 let winRankings = [1,2,3,4,5];
 let loseRankings=[6,7,8,9,10]
 holdResults.sort((a,b)=>a.rankDiff-b.rankDiff)
holdResults.sort((a,b)=>b.scoreDiff-a.scoreDiff)

console.log(holdResults)
holdResults.forEach(item=>{

  let rng=Math.random()*10
  console.log(rng)
  let randomNum
  let randNum
  if (rng<=9.5){
    randomNum=1
    randNum=0
  }
  else{
    randNum=1
    randomNum=0
  }

  if (item.winningTeam){
    standings.push({team: item.winningTeam, rank:item.winningRank})
  }
  if (item.losingTeam){
    standings.push({team:item.losingTeam, rank: item.losingRank})
  }
const increaseRank=randomNum *(loseRankings.length-1);


  item.losingRank=loseRankings[increaseRank]
  loseRankings.splice(increaseRank, 1)
  console.log(loseRankings)
const decreaseRank= randNum * (winRankings.length-1);
console.log(increaseRank)
console.log(winRankings)
    item.winningRank=winRankings[decreaseRank]
    winRankings.splice(decreaseRank,1)

})

console.log(holdResults)
if (countUp+1<=8){
for (const team of Schedule[`week${countUp+1}`]){
  console.log(team.home.team_name)
 holdResults.forEach(item=>{
  if (item.winningTeam===team.home.team_name || item.winningTeam===team.away.team_name){
    console.log(item.winningTeam)
  item.winningTeam===team.home.team_name?team.home.ranking=item.winningRank:team.away.ranking=item.winningRank

 }
 if (item.losingTeam===team.home.team_name || item.losingTeam===team.away.team_name){
  console.log(item.losingTeam)
  item.losingTeam===team.home.team_name?team.home.ranking=item.losingRank:team.away.ranking=item.losingRank

 }
})
}}

console.log(standings.sort((a,b)=>a.rank-b.rank))

console.log(standings[0].team)
return(
    <>
  { countUp<8
  ? !showStandings?
    <>
    <div className="table__container">
    <div className="table__container-content">
{holdGames.map(item=>(
  item  
))}
    </div>
    </div>

</>:<Rankings standings={standings}/>:<div>

<Playoffs standings={standings}/>
  </div>}
    
    </>
)
}

export default Simulation