import React, {useContext,useState} from 'react';
import contexto from '../../../../api/context/contexto'
import Cart from '../cart/Cart';
import {Link} from 'react-router-dom';
import americanExpress from '../../../../assets/img/pagos/americanExpress.png'
import masterCard from '../../../../assets/img/pagos/masterCard.png'
import mercadoPago from '../../../../assets/img/pagos/mercadoPago.jpg'
import pagoFacil from '../../../../assets/img/pagos/pagoFacil.png'
import paypal from '../../../../assets/img/pagos/paypal.png'
import rapipago from '../../../../assets/img/pagos/rapipago.png'
import visa from '../../../../assets/img/pagos/visa.png'
import './cartContainer.scss'

const CartContainer = () => {

    //SE CONSUME EL CONTEXTO CON EL VALOR DEL CARRITO
    const {cart,setCart,value,setValue, setTot} = useContext(contexto);

    //SE CREA UN ESTADO QUE ALMACENE EL CAMBIO DEL CARRITO
    const [e,setE] = useState(true);

    //MÉTODO ENCARGADO DE VACIAR EL CARRITO
    const vaciarCarrito = () => {

        //SE ELIMINAN TODOS LOS PRODUCTOS Y SE DA UN ARRAY VACÍO
        setCart([])

        //SE REINICIA EL CONTADOR DE LOS PRODUCTOS TOTALES DEL CARRITO
        setTot(0);

        //SE REINICIA EL TOTAL DE LOS PRODUCTOS DEL CARRITO
        setValue(0);
    }



    return(
    
    <div className="contenedorCarrito row">

        {/* LISTADO DE PRODUCTOS EN EL CARRITO */}
        {cart.length === 0 

        ? 

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

            <section className="contenedorCarrito__Titulo">
                <h1>TU CARRITO ESTÁ VACÍO</h1>
            </section>

            <section className="contenedorCarrito__Catalogo">
                <Link to="/" className='contenedorCarrito__CatalogoLink'>
                    <p>IR AL CATÁLOGO</p>
                </Link>
            </section>

        </div>
        
        

        : 

        
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

           <section className="contenedorCarrito__Titulo">
                <h1>TU CARRITO</h1>
            </section>

            {cart.map(producto =>{
                return(

                <div className="contenedorCarrito__Productos" key={producto.item.producto.id}>
                    <Cart producto={producto} e={e} setE={setE}/>
                </div>

                )
            })}

            <section className="contenedorCarrito__Total">
                <h2>{`Total: $${value}`}</h2>
            </section>

            <div className="contenedorCarrito__Botones">
                <Link to="/" className="contenedorCarrito__Volver">
                    <button className="contenedorCarrito__VolverBoton">VOLVER AL CATÁLOGO</button>
                </Link>

                <button className="contenedorCarrito__Vaciar" onClick={vaciarCarrito}>VACIAR CARRITO</button>

                <Link to='/orderPurchase' className="contenedorCarrito__Terminar">
                    <button className="contenedorCarrito__TerminarBoton">TERMINAR COMPRA</button>
                </Link>
            </div>
            

            

        </div>
        

        } 


        {/* DETALLES DEL PEDIDO */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            
            <section className="contenedorCarrito__Detalles">
                <h6>Nuestros productos Bebote te ofrecen la mejor calidad y garantía a los precios más
                    cuidados del mercado, porque es importante para nosotros tu satisfacción, siendo nuestro
                    compromiso principal.
                </h6>
            </section>

            <section className="contenedorCarrito__Ayuda">
                
                <h5>¿NECESITAS AYUDA?</h5>

                <ul>
                    <li>
                        <a href="#">Envíos y plazos de entrega</a>
                    </li>

                    <li>
                        <a href="#">Sucursal</a>
                    </li>

                    <li>
                        <a href="#">Reembolsos</a>
                    </li>
                </ul>
            </section>

            <section className="contenedorCarrito__OpcionesPago pedidos__OpcionesPago--Syne pedidos__OpcionesPago--Bebote">
                
                <h5>OPCIONES DE PAGO</h5>
                
                <div className="contenedorCarrito__OpcionesPagoIconos">
                    
                    <ul>
                        
                        <li>
                            <img src={visa} alt="VISA"></img>
                        </li>

                        <li>
                            <img src={masterCard} alt="MasterCard"></img>
                        </li>

                        <li>
                            <img src={americanExpress} alt="American Express"></img>
                        </li>

                        <li>
                            <img src={paypal} alt="Paypal"></img>
                        </li>

                        <li>
                            <img src={mercadoPago} alt="MercadoPago"></img>
                        </li>

                        <li>
                            <img src={pagoFacil} alt="Pago Fácil"></img>
                        </li>

                        <li>
                            <img src={rapipago} alt="Rapipago"></img>
                        </li>
                    </ul>

                </div>

            </section>

        </div>
        

    </div>

    )
}


export default CartContainer;