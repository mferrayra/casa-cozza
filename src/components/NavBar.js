/*
* Componente del navbar
*/
import React, { useContext } from 'react';
import {ReactComponent as LogoCozza} from '../assets/images/logo-cozza.svg';
import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { UIContext } from '../context/UIContext'
import './share/NavBar.css'
import { Login } from '../components/Login/Login'
import { ReactSession } from 'react-client-session';

export const NavBar = React.memo(() => {
  const { enableNavBar, setEmail } = useContext(UIContext)
  setEmail(ReactSession.get("email"))

  return (
    <header className={ enableNavBar ? "" : "disabled"}>
      <div className={"col-8"}>
        <nav>
          <LogoCozza style={{backgroundColor: "#ffdead", paddingTop: "0.2em", paddingBottom: "0.2em", paddingLeft: "0.1em", paddingRight: "0.1em"}} />
          <Link className={"navbar-brand"} to={"/"}>Casa Cozza</Link>
          <Link to={"/limpieza"}>Limpieza</Link>
          <Link to={"/bazar"}>Bazar</Link>
          <Link to={"/perfumeria"}>Perfumeria</Link>
          <Link to={"pet-shop"}>Pet Shop</Link>
          <Link to={"/ofertas-destacadas"}><i className="fas fa-bullhorn" /> Ofertas destacadas</Link>
        </nav>
      </div>      
      <div id="login" className={"col-4 text-end pt-3 pr-3"}>        
        <CartWidget />
        <Login />
      </div>      
    </header>
  )  
})