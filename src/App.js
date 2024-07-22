import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PiedrasDecorativas from './components/PiedrasDecorativas';
import Catalogo from './components/Catalogo';
import './index.css'; //

function App() {
  return (
    <div className="App">
      <PiedrasDecorativas />
      {/* Puedes descomentar la siguiente línea para ver el catálogo */}
      {< Catalogo /> }
    </div>
  );
}

export default App;
