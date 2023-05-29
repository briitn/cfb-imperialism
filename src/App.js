
import './App.css';
import Simulation from './Components/Simulation';
import { useState } from 'react';
import { Schedule } from './schedule';
import Rankings from './Components/Rankings';
import pictures from './pictures';
function App() {
console.log(Schedule.week1[0].home.rating)
  const getPattern=document.querySelectorAll('pattern')
  const getDefs=document.querySelector('defs')
  const getAllPaths= document.querySelectorAll('path')
  const [simulate, setSimulate]=useState(false)
  const [showStandings, setShowStandings]=useState(true)
 const [count, setCount]=useState(0)
 const standings = [
  {team: "Michigan", rank:1},
  {team: "Ohio-State", rank:2},
  {team:"Penn-State", rank:3},
  {team:"Maryland", rank:4},
  {team: "Minnesota", rank:5},
  {team:"Iowa", rank:6},
  {team:"Indiana", rank: 7},
  {team: "Nebraska", rank: 8},
  {team:"Illinois", rank:9},
  {team:"Rutgers", rank:10}
];

const style1={   backgroundColor: !showStandings? 'red' : 'white',}
const style2={   backgroundColor: showStandings? 'red' : 'white',}
 let week=`week${count}`
  return (
    <div className="App">
   {count<8
   ?
   <button onClick={(e)=>{setSimulate(true)
    setCount(count+1)
    setShowStandings(false)}

    } style={style1}>Simulate week {count+1}</button>
    :
    <button 
    onClick={()=>{setCount(0)
    setSimulate(false)
    setShowStandings(false)
    getPattern.forEach(item=>{getDefs.removeChild(item)})
    getAllPaths.forEach(item=>{item.setAttribute('fill', 'white')})
    }
  }>Restart Sim</button>
    }
  <button onClick={()=>setShowStandings(true)} style={style2}>Standings</button>
{simulate?<Simulation week={week} countUp={count} standings={[]} setSimulate={setSimulate} simulate={simulate} showStandings={showStandings}/>:
<div className="standings__container-content">{standings.map(item=>{
    return (
      <table key={Math.random()}>
      <tbody>
        <tr>
          <td>
            <span>{item.rank}</span><img src={pictures.find(pic=>{
             return pic.includes(item.team)})} width='10px'/>{item.team}</td>
        </tr>
      </tbody>
      </table>
    )
  })}</div>}

    </div>
  );
}

export default App;
