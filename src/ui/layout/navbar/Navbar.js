import React from 'react';
import './navbar.scss';
import logotipoBebote from '../../../assets/img/logo/logotipoBebote.png';
import CartWidget from '../../widget/cartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({categorias}) => {



  return(

    <>

    <div className="row">
    
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <NavLink className="navbar-brand d-lg-none navbar__Logo" to="/" exact>
          <img src={logotipoBebote} width="60" height="60" alt="" loading="lazy" />
        </NavLink>

        <div className="navbar__Iconos">

          <div className="d-lg-none">

            <Link to="#" className="text-decoration-none">
              <i className="fas fa-search navbar__IconosBuscar"></i>
            </Link>

            <Link to="#" className="text-decoration-none">
              <CartWidget />
            </Link>

          </div>

            
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>

        <div className="collapse navbar-collapse navbar__Texto navbar__Texto--Syne" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item dropdown">

              <Link className="nav-link dropdown-toggle text-center" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CATÁLOGO
              </Link>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                {categorias.map((categoria)=>{

                  return (
                    
                    <Link className="dropdown-item text-center" to={`/${categoria.categoria}/${categoria.id}`} key={categoria.id}>
                      {categoria.categoria}
                    </Link>
                    
                  );

                })}
                
              </div>

            </li>


            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-center" to="/campañas" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                CAMPAÑAS
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item text-center" to="/verano2020/2021">Verano 2020/2021</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item text-center" to="/otoño2020">Otoño-Invierno 2020</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item text-center" to="/primavera2019/2020">Primavera-Verano 2019/2020</Link>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-center" to="/novedades">NOVEDADES</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-center" to="/vendedores">VENDEDORES</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-center" to="/contacto">CONTACTO</Link>
            </li> */}

          </ul>

        </div>

          
        <div className="d-none d-lg-block navbar__Iconos">

          <Link to="#" className="text-decoration-none">
            <i className="fas fa-search navbar__IconosBuscar"></i>
          </Link>

          <Link to="#" className="text-decoration-none">
            <CartWidget />
          </Link>
        </div>

      </nav>
    </div>
  </div>

</>
  )
}





export default Navbar;