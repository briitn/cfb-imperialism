
import './App.css';
import Simulation from './Components/Simulation';
import { useState } from 'react';
import { Schedule } from './schedule';
function App() {
console.log(Schedule.week1[0].home.rating)
  const getPattern=document.querySelectorAll('pattern')
  const getDefs=document.querySelector('defs')
  const getAllPaths= document.querySelectorAll('path')
  const [simulate, setSimulate]=useState(false)
 const [count, setCount]=useState(0)
 let week=`week${count}`
  return (
    <div className="App">
   {count<5
   ?
   <button onClick={(e)=>{setSimulate(true)
    setCount(count+1)}
    }>Simulate week {count+1}</button>
    :
    <button 
    onClick={()=>{setCount(0)
    setSimulate(false)
    getPattern.forEach(item=>{getDefs.removeChild(item)})
    getAllPaths.forEach(item=>{item.setAttribute('fill', 'white')})
    }
  }>Restart Sim</button>
    }
    
{simulate?<Simulation week={week} countUp={count}/>:<p></p>}

    </div>
  );
}

export default App;
