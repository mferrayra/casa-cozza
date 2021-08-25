import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { NavBar } from './components/NavBar';
import { ListContainer } from './components/ListContainer/ListContainer';
import { DetailContainer } from './components/DetailContainer/DetailContainer';

function App() {  
  return (
    <>
      <Router>        
        <NavBar />
        <Switch>
        <Route exact path="/">
            <ListContainer categoria={null} />
          </Route>          
          <Route exact path="/limpieza">
            <ListContainer categoria={"Limpieza"} />
          </Route>
          <Route exact path="/bazar">
            <ListContainer categoria={"Bazar"} />
          </Route>  
          <Route exact path="/perfumeria">
            <ListContainer categoria={"Perfumeria"} />
          </Route>
          <Route exact path="/pet-shop">
            <ListContainer categoria={"Pet Shop"} />
          </Route>
          <Route exact path="/ofertas-destacadas">
            <h1>Ofertas destacadas en construcción</h1>
          </Route>  
          <Route path="*/producto/:productoId">
              <DetailContainer />
          </Route>          
          <Route path="/">
              <Redirect to="/"/>
          </Route>
        </Switch>        
      </Router>
    </>    
  );
}

export default App;