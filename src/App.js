import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <a href="https://br.freepik.com/fotos-vetores-gratis/ceu-estrelado">Ceu estrelado foto criado por wirestock - br.freepik.com</a>
      </>
    );
  }
}

export default App;
