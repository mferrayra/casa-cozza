import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { DetergenteListContainer } from './components/DetergenteListContainer/DetergenteListContainer';

function App() {
  return (
    <React.Fragment>
      <Router>        
        <NavBar />
        <DetergenteListContainer />
      </Router>
    </React.Fragment>    
  );
}

export default App;