import react from 'react';
import './footer.scss'
import logotipoBebote from '../../../assets/img/logo/logotipoBebote.png';

const Footer = () => {

    return(
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <footer className="footer footer__Texto--Syne">

                    <div className="footer__Superior">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-3 col-md-6 footer__Apartados">
                                    <div className="float-left">
                                        <a href="../index.html" className="footer__Logotipo">
                                            <img src={logotipoBebote} alt="Logotipo Bebote" />
                                        </a>

                                        <h4>SÍGUENOS</h4>

                                        <ul className="footer__Redes">

                                            <li>
                                                <a href="#" className="facebook">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www.instagram.com/calzadosbebote/"
                                                    className="instagram">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="twitter">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 footer__Apartados">
                                    <h4>ACERCA DE BEBOTE</h4>

                                    <ul>
                                        <li>
                                            <a href="#" className="text-decoration-none">Empresa</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">Trabajo</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">Historia</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">Sobre nosotros</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 footer__Apartados">
                                    <h4>LEGALES</h4>
                                    <ul>
                                        <li>
                                            <a href="#" className="text-decoration-none">Políticas de privacidad</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">Términos y condiciones</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-md-6 footer__Newsletter">
                                    <h4>SUSCRÍBETE A NUESTRO NEWSLETTER</h4>
                                    <form action="#" method="#">

                                        <input type="email" name="email" />
                    
                                        {/* BOTÓN DE ENVIO DEL FORMULARIO */}
                                        <button type="submit" className="footer__NewsletterEnviar">
                                          Suscribirse
                                        </button>
                                        
                                      </form>
                                    <p>
                                        CONOCE ANTES QUE NADIE NUESTROS PRODUCTOS
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer__Inferior container d-md-flex py-4">
                        <div className="mr-md-auto text-center text-md-left">
                          <div className="copyright">
                            &copy; Copyright <strong><span>Bebote</span></strong>. All Rights Reserved
                          </div>
                          <div className="footer__Creditos">
                            Designed by
                            <a href="#">Diego Alvarado</a>
                          </div>
                        </div>
            
                        <div className="footer__Arriba text-center text-md-right pt-3 pt-md-0">
                            <a href="#" className="text-decoration-none text-dark">
                              <i className="fas fa-sort-up"></i>Ir arriba
                            </a>
                          </div>
                      </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;