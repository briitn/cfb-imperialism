import logo from './logo.svg';
import './App.css';
import Results from './week1/Results';

import { useState } from 'react';
function App() {
  const getPattern=document.querySelectorAll('pattern')
  const getDefs=document.querySelector('defs')

  const getAllPaths= document.querySelectorAll('path')
  const [simulate, setSimulate]=useState(false)
 const [count, setCount]=useState(0)
 let week=`week${count}`
 console.log(week)
  return (
    <div className="App">
 
   {count<5?<button onClick={(e)=>{setSimulate(true)
    setCount(count+1)}
    }>Simulate week{count+1}</button>:<button onClick={()=>{setCount(0)
    setSimulate(false)
    getPattern.forEach(item=>{getDefs.removeChild(item)})
    getAllPaths.forEach(item=>{item.setAttribute('fill', 'white')})
    }
  
  }
    
    >Restart Sim</button>
    }
    
{simulate?<Results week={week} countUp={count}/>:<p></p>}
    </div>
  );
}

export default App;
