/*App con los routes y los envoltorios de los providers*/
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Switch, BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import { NavBar } from './components/NavBar'
import { ListContainer } from './components/ListContainer/ListContainer'
import { DetailContainer } from './components/DetailContainer/DetailContainer'
import { CartContextProvider } from './context/CartContext'
import { AppContextProvider } from './context/AppContext'
import { CartScreen } from './components/CartScreen/CartScreen'
import { CheckOut } from './components/CheckOut/CheckOut'

function App() {    
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>
          <Router>        
            <NavBar />
            <Switch>
            <Route exact path="/">
                <ListContainer category={null} />
              </Route>
              <Route exact path="/limpieza">
                <ListContainer category={"Limpieza"} />
              </Route>
              <Route exact path="/bazar">
                <ListContainer category={"Bazar"} />
              </Route>  
              <Route exact path="/perfumeria">
                <ListContainer category={"Perfumeria"} />
              </Route>
              <Route exact path="/pet-shop">
                <ListContainer category={"Pet Shop"} />
              </Route>              
              <Route path="*/product/:productId">
                  <DetailContainer />
              </Route>              
              <Route exact path="/shopping-cart">
                {
                  <CartScreen />
                }
              </Route>
              <Route exact path="/check-out">
                {
                  <CheckOut />
                }
              </Route>                
              <Route path="/">
                  <Redirect to="/"/>
              </Route>
            </Switch>        
          </Router>
        </CartContextProvider>
      </AppContextProvider>      
    </>    
  )
}

export default App;