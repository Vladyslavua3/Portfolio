import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Skills} from "./skils/Skills.";

function App() {
  return (
      <div>
          <Header/>
          <Main/>
          <Skills/>
      </div>
  );
}

export default App;
