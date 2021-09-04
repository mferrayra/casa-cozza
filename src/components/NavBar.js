import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import {ReactComponent as LogoCozza} from '../assets/images/logo-cozza.svg';
import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const brandColor = "#ffdead";

const Styles = styled.div`
  .navbar { background-color: #222; padding-left: 0.5em; }
  a, .navbar-nav, .navbar-light .nav-link {
    margin-left: 3em;
    color: #9FFFCB;
    &:hover { color: white; },    
  }
  .navbar-brand {
    margin-left: 0.5em;
    font-size: 1.8em;
    color: ${brandColor};
    &:hover { color: white; }
  }
`;

export const NavBar = () => (
  <Styles>    
    <Navbar expand="lg">
        <LogoCozza style={{backgroundColor: brandColor}} />    
        <Navbar.Brand href="/">Casa Cozza</Navbar.Brand>        
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">            
                <Nav.Item>
                  <Link style={{color:brandColor}} className={"mx-5"} to={"/limpieza"}>Limpieza</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link style={{color:brandColor}} className={"mx-5"} to={"/bazar"}>Bazar</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link style={{color:brandColor}} className={"mx-5"} to={"/perfumeria"}>Perfumeria</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link style={{color:brandColor}} className={"mx-5"} to={"pet-shop"}>Pet Shop</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link style={{color:brandColor}} className={"mx-5"} to={"/ofertas-destacadas"}><i className="fas fa-bullhorn" /> Ofertas destacadas</Link>                 
                </Nav.Item>                
            </Nav>
            <CartWidget />
        </Navbar.Collapse>        
    </Navbar>
  </Styles>
)