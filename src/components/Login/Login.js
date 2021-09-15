/*
* Login Component: renderiza un popup login mocked (para poder operar con el carrito)
*/

import React, { useContext, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import './Login.css'
import Modal from "react-modal";
import { AppContext } from '../../context/AppContext';
import { CartContext } from '../../context/CartContext';

// style del popup
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 20%)',
  },
};

// popup en el root
Modal.setAppElement("#root");

export const Login = () => {  
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);   
  const {user, setUser} = useContext(AppContext)
  const {emptyCart} = useContext(CartContext)

  // modal login
  const openModal = (event) => {
    event.preventDefault()
    setIsOpen(true);
  }

  // mock login
  const afterOpenModal = () => {
    emailInputRef.current.value = "mdferrayra@gmail.com"
    passwordInputRef.current.value = "password"
    emailInputRef.current.focus()
  }

  // cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
  }

  // logout
  const handleLogout = (event) => {
    event.preventDefault()    
    setUser(null)
    emptyCart()   
  }

  // login user
  const handleLogin = (event) => {    
    // in the future, here save jwt from some service... 
    event.preventDefault()   
    setUser({ 
      email: emailInputRef.current.value,
      phone: '3416913431',
      names: 'Martin Ferrayra',
      address: 'Rusiñol 436 - (2000) Rosario'
    })   
    closeModal()    
  }

  // para cuando no este logueado
  const getLoginTag = () => {    
    return <Link to="/#" onClick={openModal}>
             <span><i className="fa fa-user fa-2x"></i></span>
           </Link>
  }

  // para cuando este logueado
  const getLogoutTag = () => {
    return <Link to="/#" onClick={handleLogout}>
             <span>{user.names}&nbsp;<i className="fas fa-sign-out-alt fa-2x"></i></span>
           </Link> 
  }

  return (
    <>
      {user ? getLogoutTag() : getLoginTag()}            
      <Modal className="container-fluid main_container" isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">        
        
        <div className="container">  
          <div className="row">
            <div className="col-md-4 offset-md-5">
              <div className="card border-2 border-info shadow rounded-3 my-5">                
                <div className="card-body pl-4 pr-4 pb-4">
                  <div className="row">
                    <div className="col-1 offset-10">
                      <button type="button" className="btn-close" onClick={() => closeModal()} />
                    </div>
                    <div className="row text-center">
                      <h4>Login</h4>
                    </div>                    
                  </div>
                  <div className="d-flex flex-column text-center m-4"> 
                    <form onSubmit={handleLogin}>
                      <div className="row">                        
                          <input type="email" className="form-control mb-3" placeholder="tu email..." required ref={emailInputRef} />
                          <input type="password" className="form-control mb-3" placeholder="tu contraseña..." required ref={passwordInputRef} />                          
                          <button type="submit" className="btn btn-block btn-info btn-round mb-3 text-white">Login</button>                          
                      </div>
                    </form>                                                          
                    <p className="small">
                      o con una red social
                    </p>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-secondary btn-round btn-social" title="Google">
                        <i className="fab fa-google"></i>
                      </button>
                      <button type="button" className="btn btn-secondary btn-round btn-social" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button type="button" className="btn btn-secondary btn-round btn-social" title="Facebook">
                        <i className="fab fa-facebook"></i>
                      </button>
                      <button type="button" className="btn btn-secondary btn-round btn-social" title="Linkedin">
                        <i className="fab fa-linkedin"></i>
                      </button>                      
                    </div>
                    <div>
                      <span className="small text-end mx-1">No recordás tu contraseña?</span>
                      <Link to="/#" className="text-primary small text-start flex-grow-1 mx-1">Registrate</Link>
                    </div>                                        
                  </div>                  
                </div>                
              </div>              
            </div>            
          </div>
        </div>
      </Modal>
    </>
  )
}