import React from 'react';
import './header.scss';
import logotipoBebote from './../../assets/img/logo/logotipoBebote.png';
import ayuda from './../../assets/img/header/Ayuda.png';
import pregunta from './../../assets/img/header/Pregunta.png';
import ubicacion from './../../assets/img/header/Ubicacion.png';

const Header = () =>

<div className="row" id="header">
    
    <div className="col-lg-12">
      
      <header className="d-none d-lg-block header">
        
        <div className="container clearfix">
          
          <div className="float-left">
            <a href="index.html" className="header__Logo">
              <img src={logotipoBebote} alt="Logotipo Bebote" />
            </a>
          </div>
          
          <div className="float-right header__Iconos header__Iconos--Syne">
            <a href="#" className="text-decoration-none">
              <img src={ayuda} alt="Ayuda" />
              <h5>Ayuda</h5>
            </a>

            <a href="#" className="text-decoration-none">
              <img src={pregunta} alt="Preguntas Frecuentes" />
              <h5>Preguntas Frecuentes</h5>
            </a>

            <a href="#" className="text-decoration-none">
              <img src={ubicacion} alt="Sucursal" />
              <h5>Ubicación</h5>
            </a>
          </div>

        </div>

      </header>

    </div>

  </div>

export default Header;