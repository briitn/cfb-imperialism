import { Schedule } from "../schedule";
import './Simulation.css'
import simulateGame from "./Simulate";
import pictures from "../pictures";

function Rankings({standings}){
console.log(standings)

  const mapStandings=standings.map(item=>{
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
  })

  return(
    <div className="standings__container-content">
      {mapStandings}
    </div>
  )
}











export default Rankings