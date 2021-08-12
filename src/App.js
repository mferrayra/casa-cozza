import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <Router>        
        <NavBar />
      </Router>
    </React.Fragment>
  );
}

export default App;