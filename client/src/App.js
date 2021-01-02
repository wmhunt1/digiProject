import React from "react";
import "./App.css";
import digimon from "./digimon.js"
//import digimonLine from "./digimonLine.js"
function App() {
  return (
    <div>
      <h1>DigiProject</h1>
      {digimon.map(digimon => {
        return <div>
          --------------------------------------------------------
             <h2>{digimon.name} - {digimon.level} Level</h2>
          <img alt = {digimon.name}src={digimon.img}></img>
          <h3>Attack: {digimon.attack}</h3>
        </div>;
      })}
    </div>

  );
}


export default App;
