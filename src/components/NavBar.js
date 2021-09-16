/*
* Navbar Component: renderiza la barra de menu horizontal superior
*/
import React, { useContext } from 'react';
import {ReactComponent as LogoCozza} from '../assets/images/logo-cozza.svg';
import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext'
import './Share/NavBar.css'
import { Login } from '../components/Login/Login'

export const NavBar = React.memo(() => {
  // habilita/deshabilita navbar, user mocked
  const { enableNavBar, user } = useContext(AppContext)
  return (
    <header className={ enableNavBar ? "" : "disabled"}>
      <div className={"col-8"}>
        <nav>
          <LogoCozza style={{backgroundColor: "#ffdead", paddingTop: "0.2em", paddingBottom: "0.2em", paddingLeft: "0.1em", paddingRight: "0.1em"}} />
          <Link className={"navbar-brand"} to={"/"}>Casa Cozza</Link>
          <Link to={"/limpieza"}>Limpieza</Link>
          <Link to={"/bazar"}>Bazar</Link>
          <Link to={"/perfumeria"}>Perfumeria</Link>
          <Link to={"/pet-shop"}>Pet Shop</Link>          
        </nav>
      </div>      
      <div id="login" className={"col-4 d-flex flex-row-reverse pt-3 pr-3"}>                        
        <Login />
        <div className={user ? "" : "disabled"}>
          <CartWidget />
        </div>
        {
          (user) && <Link to={"/orders"}>Mis Compras</Link>
        }
      </div>      
    </header>
  )  
})