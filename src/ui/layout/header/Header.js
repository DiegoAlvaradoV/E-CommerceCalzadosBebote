import React from 'react';
import './header.scss';
import logotipoBebote from '../../../assets/img/logo/logotipoBebote.png';
import ayuda from '../../../assets/img/header/Ayuda.png';
import pregunta from '../../../assets/img/header/Pregunta.png';
import ubicacion from '../../../assets/img/header/Ubicacion.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () =>

<div className="row" id="header">
    
    <div className="col-lg-12">
      
      <header className="d-none d-lg-block header">
        
        <div className="container clearfix">
          
          <div className="float-left">
            <NavLink to="/" className="header__Logo" exact>
              <img src={logotipoBebote} alt="Logotipo Bebote" />
            </NavLink>
          </div>
          
          <div className="float-right header__Iconos header__Iconos--Syne">
            <Link to="/ayuda" className="text-decoration-none">
              <img src={ayuda} alt="Ayuda" />
              <h5>Ayuda</h5>
            </Link>

            <Link to="/preguntas" className="text-decoration-none">
              <img src={pregunta} alt="Preguntas Frecuentes" />
              <h5>Preguntas Frecuentes</h5>
            </Link>

            <Link to="/ubicacion" className="text-decoration-none">
              <img src={ubicacion} alt="Sucursal" />
              <h5>Ubicación</h5>
            </Link>
          </div>

        </div>

      </header>

    </div>

  </div>

export default Header;