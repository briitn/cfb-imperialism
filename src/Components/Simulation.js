
import { Schedule } from "../schedule";
import './Simulation.css'
import simulateGame from "./Simulate";
import pictures from "../pictures";
import increaseRankings from "./Rankings";
const Simulation=({week, countUp})=>{
 const holdGames=[]
 const holdResults=[]
 for (const game of Schedule[`${week}`]) {
  const { home, away } = game;
  const score = simulateGame(home, away);
  
  let winningTeam, losingTeam,losingRank, winningRank;
  if (score[0] > score[1]) {
    winningTeam = home.team_name;
    losingTeam = away.team_name;
    winningRank= home.ranking
    losingRank=away.ranking
    holdResults.push({winningTeam,
  losingTeam,losingRank , winningRank})
  } else if (score[1] > score[0]) {
    winningTeam =  away.team_name;
    losingTeam = home.team_name;
   winningRank = away.ranking
   losingRank=home.ranking
    holdResults.push({winningTeam,
      losingTeam, losingRank, winningRank})
  } else {
    continue; // In case of a tie, do nothing
  }

  // Update rankings
  
   

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
image.setAttribute('x', `${countUp*5}`);
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
    pattern.setAttribute('x', '50%');
    pattern.setAttribute('y', '50%');
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
 }
 for(const team of Schedule['week2']){
 holdResults.forEach(item=>{
  if(team.away.team_name===item.winningTeam || team.home.team_name===item.winningTeam){
    console.log(item)
  team.away.team_name===item.winningTeam?team.away.ranking=item.winningRank-1:team.home.ranking=item.winningRank-1
   }
    if(team.away.team_name===item.losingTeam || team.home.team_name===item.losingTeam){
      
    team.away.team_name===item.losingTeam?team.away.ranking=item.losingRank+1:team.home.ranking=item.losingRank+1
     }})
 }

const filterTeam=Schedule['week2'].filter(item=>item.home.ranking===4)
console.log(filterTeam)

return(
    <>
    <div className="holdResultsTable">
    <div className="resultsTable">
{holdGames.map(item=>(
  item  
))}
    </div>
    </div>
    </>
)
}

export default Simulation
