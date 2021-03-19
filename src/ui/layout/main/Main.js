import React,{useEffect,useState} from 'react';
import './main.scss';
import ItemListContainer from '../../pages/catalogo/itemListContainer/ItemListContainer';
import {Route, Switch} from 'react-router-dom';
import ItemDetailContainer from '../../pages/catalogo/itemDetailContainer/ItemDetailContainer';
import CartContainer from '../../pages/catalogo/cartContainer/CartContainer';
import OrderPurchase from '../../pages/catalogo/orderPurchase/OrderPurchase'
import {firestore} from '../../../api/firebase/firebase';


const Main = () => {

    //SE CREA UN ESTADO QUE ALMACENA LOS PRODUCTOS DE LA BASE DE DATOS
    const [productos,setProductos] = useState([]);

    //SE CREA UN EFECTO SECUNDARIO QUE RECIBE TODOS LOS PRODUCTOS DE LA BASE DE DATOS
    useEffect(() => {

        //SE ALMACENA EN UNA CONSTANTE LA INSTANCIA DE LA BASE DE DATOS
        const db = firestore;

        //SE CREA UNA VARIABLE QUE ALMACENARÁ TODOS LOS DATOS DE LOS PRODUCTOS OBTENIDOS DE LA BASE DE DATOS
        let p = [];

        //SE CREA UNA VARIABLE QUE IDENTIFICA LA CATEGORIA DEL PRODUCTO
        let cat;

        //CONSULTA QUE DEVUELVE TODOS LOS PRODUCTOS Y SUS ID
        db.collection('items').orderBy('name','asc').get()
        .then((resultado)=>{
            resultado.docs.forEach((doc)=>{

                //SE DEFINE LA CATEGORIA DEL PRODUCTO
                if(doc.data().categoryId===1){
                    cat='Calzado Bebés';
                }else if(doc.data().categoryId===2){
                    cat='Calzado Niñas'
                }else if(doc.data().categoryId===3){
                    cat='Calzado Adolescentes'
                }

                //SE CREA UN NUEVO PRODUCTO A ALMACENAR
                let nuevoProducto = {
                    'item':doc.data(),
                    'id':doc.id,
                    'cat':cat
                }

            
                //SE AGREGA ESE PRORUCTO A LA VARIABLE QUE ALMACENA LOS PRODUCTOS OBTENIDOS
                p.push(nuevoProducto)
                
            })

            //ENVÍA ESOS PRODUCTOS AL ESTADO
            setProductos(p);
            
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])



    return (

        <main>

            {/* CONFIGURACIÓN DE LAS RUTAS DEL SITIO WEB */}
            <Switch>

                {/* LISTAR TODOS LOS PRODUCTOS */}
                <Route path="/" exact>
                    <ItemListContainer producto={productos} categoria={0} greeting={'BIENVENIDO/A A CALZADOS BEBOTE'}/>
                </Route>

                {/* LISTAR TODOS LOS PRODUCTOS */}
                <Route path="/calzados-bebote-react/">
                    <ItemListContainer producto={productos} categoria={0} greeting={'BIENVENIDO/A A CALZADOS BEBOTE'}/>
                </Route>


                {/* LISTAR PRODUCTOS SEGÚN LA CATEGORIA */}
                {productos.map((producto)=>{

                    return(
                        <Route path={`/${producto.cat}/${producto.item.categoryId}`} key={producto.item.categoryId}>
                            <ItemListContainer producto={productos} categoria={producto.item.categoryId} greeting={producto.cat}/>
                        </Route>
                    )

                })}


                {/* ACCEDER A LOS DETALLES DE LOS PRODUCTOS */}
                {productos.map((producto)=>{

                    return(
                        <Route path={`/${producto.item.name}/${producto.id}`} key={producto.id}>
                            <ItemDetailContainer producto={producto}/>
                        </Route>
                    )

                })}
                

                {/* ACCEDER AL CARRITO */}
                <Route path="/cart">
                    <CartContainer/>
                </Route>

                {/*FINALIZAR LA ORDEN DE LA COMPRA*/}
                <Route path='/orderPurchase'>
                    <OrderPurchase/>
                </Route>

            </Switch>
            
            

        </main>

    )
}









export default Main;