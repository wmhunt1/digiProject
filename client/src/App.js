import React from "react";
import "./App.css";
import digimon from "./digimon.js"
import digimonLine from "./digimonLine.js"
///console.log(agumon)
function App() {
  return (
  <div>
    <h1>DigiProject</h1>
    {/* <h2>{digimon[0].name} - {digimon[0].level}</h2>
    <img src = {digimon[0].img}></img>
    <h3>{digimon[0].attack}!</h3> */}
    <ul>
        {digimon.map(digimon => {
          return <div>
             <h2>{digimon.name} - {digimon.level}</h2>
    <img src = {digimon.img}></img>
    <h3>{digimon.attack}!</h3>
          </div>;
        })}
      </ul>
    </div>
    
  );
}


export default App;
