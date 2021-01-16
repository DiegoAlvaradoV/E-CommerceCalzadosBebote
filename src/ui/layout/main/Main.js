import React,{useState, useEffect} from 'react';
import './main.scss';
import ItemListContainer from '../../pages/catalogo/itemListContainer/ItemListContainer';
import {Route, Switch} from 'react-router-dom';
import ItemDetailContainer from '../../pages/catalogo/itemDetailContainer/ItemDetailContainer';
import Cart from '../../pages/catalogo/cart/Cart';



const Main = () => {


    //SE CREA UN ESTADO PARA RECIBIR LA INFORMACIÓN DE LOS PRODUCTOS
    const [productos,setProductos] = useState([]);

    //SE RECIBEN LOS PRODUCTOS LISTADOS PARA GENERAR LAS RUTAS DE LOS LINKS
    const recibirProductos = (productos) => {

        setProductos(productos);

    };



    return (

        <main>

            {/* CONFIGURACIÓN DE LAS RUTAS DEL SITIO WEB */}
            <Switch>

                {/* LISTAR TODOS LOS PRODUCTOS */}
                <Route path="/" exact>
                    <ItemListContainer greeting='BIENVENIDO/A A CALZADOS BEBOTE' categoria={undefined} rProductos={recibirProductos}/>
                </Route>


                {/* LISTAR PRODUCTOS SEGÚN LA CATEGORIA */}
                {productos.map((producto)=>{

                    return(
                        <Route path={`/${producto.categoria}`} key={producto.id}>
                            <ItemListContainer greeting={producto.categoria} categoria={producto.categoria} rProductos={recibirProductos}/>
                        </Route>
                    )

                })}


                {/* ACCEDER A LOS DETALLES DE LOS PRODUCTOS */}
                {productos.map((producto)=>{

                    return(
                        <Route path={`/${producto.nombre}/${producto.id}`} key={producto.id}>
                            <ItemDetailContainer producto={producto}/>
                        </Route>
                    )

                })}
                

                {/* ACCEDER AL CARRITO */}
                <Route path="/cart">
                    <Cart/>
                </Route>

            </Switch>
            
            

        </main>

    )
}









export default Main;