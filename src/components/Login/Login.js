/*
* Este componente representa un login; y por proposito de no extenderse en una autenticacion completa
* funciona de la siguiente manera: Si el usuario no esta logueado tiene que hacerlo para poder operar
* con el carrito y es aqui en donde el usuario cargara un email y password, y sin validaciones lo autenticara 
* con el email en la sesion de localstorage. Si hay un email en el storage, el componente navbar carga el valor 
* en el contexto de la UI, y de esta manera podrá operar con el carrito. El usuario, tambienpodrá hacer logout 
* y de esta manera elimiar el email del storage y vaciar el carrito (simulando abandonar la tienda).
*/

import React, { useContext, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { ReactSession } from 'react-client-session';
import './Login.css'
import Modal from "react-modal";
import { UIContext } from '../../context/UIContext';
import { CartContext } from '../../context/CartContext';
import { useHistory, useLocation } from 'react-router-dom'

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
  const history = useHistory()
  const location = useLocation()
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);   
  const {email, setEmail} = useContext(UIContext)
  const {emptyCart} = useContext(CartContext)

  // modal login
  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    emailInputRef.current.focus()
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  // logout
  const handleLogout = () => {    
    setEmail("")
    ReactSession.set("email", "")
    emptyCart()   
  }

  // login user
  const handleLogin = () => {    
    // in the future, here save jwt from some service...    
    setEmail(emailInputRef.current.value)    
    ReactSession.set("email", emailInputRef.current.value)
    closeModal() 
    if (location.pathname === '/not-login'){
      history.push('/')     
    }    
  }

  // para cuando no este logueadp
  const getLoginTag = () => {    
    return <Link onClick={openModal}>
             <span><i className="fa fa-user fa-2x"></i></span>
           </Link>
  }

  // para cuando este logueado
  const getLogoutTag = () => {
    return <Link onClick={handleLogout}>
             <span>{email}&nbsp;<i className="fas fa-sign-out-alt fa-2x"></i></span>
           </Link> 
  }

  return (
    <>
      {email && email.length > 0 ? getLogoutTag() : getLoginTag()}            
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
                      <Link className="text-primary small text-start flex-grow-1 mx-1">Registrate</Link>
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