import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Skills} from "./skils/Skills.";
import {MyProject} from "./MyProject/MyProject";
import {RemoteWork} from "./components/RemoteWork";
import {ContactForm} from "./ContactForm/ContactForm";
import {Footer} from "./Footer/Footer";

function App() {
  return (
      <div>
          <Header/>
          <Main/>
          <Skills/>
          <MyProject />
          <RemoteWork />
          <ContactForm />
          <Footer />
      </div>
  );
}

export default App;
