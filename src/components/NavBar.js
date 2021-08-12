import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import {ReactComponent as LogoCozza} from '../logo-cozza.svg';

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
                <Nav.Item><Nav.Link href="/limpieza">Limpieza</Nav.Link></Nav.Item> 
                <Nav.Item><Nav.Link href="/bazar">Bazar</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/perfumeria">Perfumería</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/pet-shop">Pet shop</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link style={{color: brandColor}} href="/ofertas-destacadas"><i className="fas fa-bullhorn" /> Ofertas destacadas</Nav.Link></Nav.Item>                
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Styles>
)