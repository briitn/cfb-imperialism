
import { Schedule } from "../schedule";
import './Simulation.css'
import simulateGame from "./Simulate";
import pictures from "../pictures";
import increaseRankings from "./Rankings";
const Simulation=({week, countUp})=>{
 const holdGames=[]
 const holdResults=[]
 const rankings =[];
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
 };

 for(const team of Schedule[`week${countUp+1}`]){
 holdResults.forEach(result=>{
  if(team.away.team_name===result.winningTeam || team.home.team_name===result.winningTeam){
  for (const game of Schedule[`week${countUp+1}`]){
  if (rankings.includes(result.winningRank-1)){
    team.away.team_name===result.winningTeam?team.away.ranking=result.winningRank:team.home.ranking=result.winningRank
  }
  else if (!rankings.includes(result.winningRank-1)){
    rankings.push(result.winningRank-1)
    team.away.team_name===result.winningTeam?team.away.ranking=result.winningRank-1:team.home.ranking=result.winningRank-1
  }
  }
  console.log('ll')

   }

    if(team.away.team_name===result.losingTeam || team.home.team_name===result.losingTeam){
      
      for (const game of Schedule[`week${countUp+1}`]){
     
        if (rankings.includes(result.losingRank+1)){
        
          team.away.team_name===result.winningTeam?team.away.ranking=result.losingRank:team.home.ranking=result.losingRank
        }
        else if(!rankings.includes(result.losingRank+1)){
          rankings.push(result.losingRank+1)
          team.away.team_name===result.winningTeam?team.away.ranking=result.losingRank+1:team.home.ranking=result.losingRank+1
        }
        }
     }})
     console.log(rankings)
 }

console.log(Schedule['week2'])
//  function rearrangeTeams(schedule) {
//   // create a list of rankings
//   const rankings = schedule.reduce((acc, curr) => {
//     acc.push(curr.home.ranking);
//     acc.push(curr.away.ranking);
//     return acc;
//   }, []);
//   console.log(rankings);
//   // loop through the rankings, checking for duplicates
//   [...new Set(rankings)].forEach(rank => {
//     const rankTeams = schedule.filter(team => team.home.ranking === rank || team.away.ranking === rank);
    
//     // if there are duplicates, rearrange the schedule
//     if (rankTeams.length > 1) {
//       const sortedTeams = rankTeams.sort((a, b) => {
//         if (a.home.ranking === rank) return -1;
//         if (b.home.ranking === rank) return 1;
//         return 0;
//       });
      
//       sortedTeams.forEach((team, index) => {
//         const newRank = rank + index;
//         if (team.home.ranking === rank) {
//           team.home.ranking = newRank;
//         } else {
//           team.away.ranking = newRank;
//         }
//       });
//     }
//   });
  
//   return schedule;
// }

// console.log(rearrangeTeams(Schedule[`week${countUp+1}`]))
// // console.log(rearrangeTeams(Schedule[`week${countUp+1}`]))
// // Define the initial team rankings
// let rankings = [
//   { name: "Alabama", rank: 1 },
//   { name: "Clemson", rank: 2 },
//   { name: "Ohio State", rank: 3 },
//   { name: "Oklahoma", rank: 4 },
//   { name: "Georgia", rank: 5 }
// ];

// // Simulate a match between two teams
// let team1 = rankings[0]; // Alabama
// let team2 = rankings[2]; // Ohio State
// let team1Score = Math.floor(Math.random() * 50) + 1; // Generate a random score for team 1
// let team2Score = Math.floor(Math.random() * 50) + 1; // Generate a random score for team 2

// // Update the rankings based on the match result
// if (team1Score > team2Score) {
//   // Team 1 wins, so its rank goes down by 1 and Team 2's rank goes up by 1
//   if (team1.rank > 1) {
//     team1.rank--;
//     team2.rank++;
//   }
// } else {
//   // Team 2 wins, so its rank goes down by 1 and Team 1's rank goes up by 1
//   if (team2.rank > 1) {
//     team2.rank--;
//     team1.rank++;
//   }
// }

// // Check for any duplicate ranks and adjust them if necessary
// let sortedRankings = rankings.sort((a, b) => a.rank - b.rank);
// for (let i = 0; i < sortedRankings.length - 1; i++) {
//   if (sortedRankings[i].rank === sortedRankings[i + 1].rank) {
//     sortedRankings[i + 1].rank++;
//   }
// }

// // Display the updated rankings
// console.log("Updated Rankings:");
// console.log(sortedRankings);

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
