import React from 'react';
import './navbar.scss';
import logotipoBebote from './../../assets/img/logo/logotipoBebote.png';
import CartWidget from '../cartWidget/CartWidget';

const Navbar = () =>


<div className="row">
    
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <a className="navbar-brand d-lg-none navbar__Logo" href="index.html">
          <img src={logotipoBebote} width="60" height="60" alt="" loading="lazy" />
        </a>

        <div className="navbar__Iconos">

          <div className="d-lg-none">

            <a href="#" className="text-decoration-none">
              <i className="fas fa-search navbar__IconosBuscar"></i>
            </a>

            <a href="pages/pedido.html" target="_blank" className="text-decoration-none">
              <CartWidget />
            </a>

          </div>

            
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>

        <div className="collapse navbar-collapse navbar__Texto navbar__Texto--Syne" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">

          <li className="nav-item">
              <a className="nav-link text-center" href="#">CAMPAÑAS</a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-center" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CALZADO BEBÉS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item text-center" href="#">Zapatillas Bebés</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-center" href="#">Sandalias Bebés</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-center" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CALZADO NIÑAS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item text-center" href="#">Zapatillas Niñas</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-center" href="#">Sandalias Niñas</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-center" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CALZADO ADOLESCENTES
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item text-center" href="#">Zapatillas Adolescentes</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-center" href="#">Sandalias Adolescentes</a>
              </div>
            </li>

          </ul>

        </div>

          
        <div className="d-none d-lg-block navbar__Iconos">

          <a href="#" className="text-decoration-none">
            <i className="fas fa-search navbar__IconosBuscar"></i>
          </a>

          <a href="pages/pedido.html" className="text-decoration-none">
            <CartWidget />
          </a>
        </div>

      </nav>
    </div>
  </div>


export default Navbar;