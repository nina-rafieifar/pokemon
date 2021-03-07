import React from "react";
import { Layout } from "./Components/Layout/View";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./img/pokemon.png" className="App-logo" alt="logo" />
      </header>
      <div className="App-background">
        <h1>Pokémon</h1>
      </div>
      <Layout />
    </div>
  );
}

export default App;
