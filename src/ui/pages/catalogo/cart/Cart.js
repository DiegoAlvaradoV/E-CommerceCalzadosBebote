import React, {useContext} from 'react';
import contexto from '../../../../api/context/contexto'
import './cart.scss'

const Cart = ({producto,e,setE}) => {


    //SE CONSUME EL CONTEXTO CON EL VALOR DEL CARRITO, LA CANTIDAD DE PRODUCTOS TOTALES Y EL PRECIO DE TODOS LOS PRODUCTOS
    const {cart,setCart, tot, setTot, value, setValue} = useContext(contexto);


    const removeItem = () => {

        //SE CREA UNA COPIA DEL CARRITO ACTUAL
        let carrito = cart;

        //SE CREA UNA VARIABLE QUE ALMACENA EL TOTAL DE PRODUCTOS AGREGADOS AL CARRITO
        let ac = 0;

        //SE CREA UNA VARIABLE QUE ALMACENA EL VALOR TOTAL DE TODOS LOS PRODUCTOS AGREGADOS
        let total = 0;
        

        //SE ANALIZAN LAS POSICIONES DEL CARRITO
        for(let pro of cart){

            //SE BUSCA CUAL ES EL PRODUCTO A ELIMINAR
            if(pro.item.producto.id === producto.item.producto.id){

                //SE AVERIGUA CUAL ES LA POSICIÓN DEL ELEMENTO DENTRO DEL ARRAY QUE TIENE ESTA REPETICIÓN
                let pos=cart.indexOf(pro);

                //SE MODIFICA LA COPIA HECHA DEL CARRITO CON EL PRODUCTO ELIMINADO
                carrito.splice(pos,1);

            }

        }

        //SE ANALIZAN LAS POSICIONES DEL CARRITO CON EL PRODUCTO ELIMINADO ANTERIORMENTE Y SE ANALIZA EL TOTAL DE PRODUCTOS Y EL NUEVO PRECIO TOTAL
        for(let p of carrito){
            ac = ac + p.count;
            total = total + (p.item.producto.item.price * p.count) 
        }

        //SE AGREGA AL CARRITO SUS NUEVOS PRODUCTOS CON EL PRODUCTO ELIMINADO
        setCart(carrito);

        //SE AGREGA AL TOTAL DE PRODUCTOS AGREGADOS SU NUEVA CANTIDAD CON EL PRODUCTO ELIMINADO DEL CARRITO
        setTot(ac)

        //SE AGREGA EL VALOR TOTAL DE TODOS LOS PRODUCTOS AGREGADOS AL CARRITO CON EL PRODUCTO SELECCIONADO ELIMINADO
        setValue(total);

        //SE REACCIONA AL CAMBIO DEL CARRITO
        setE(!e)
    }


    //MÉTODO ENCARGADO DE QUITAR PRODUCTOS
    const quitar = () => {

        //SE CREA UNA COPIA DEL CARRITO
        let c = cart;

        //SE ANALIZAN TODAS LAS POSICIONES DEL CARRITO HASTA ENCONTRAR EL PRODUCTO ACTUAL EN SÍ
        for(let p of cart){

            //AL ENCONTRARSE EL PRODUCTO EN EL CARRITO
            if(producto.item.producto.id === p.item.producto.id){

                //SE ALMACENA EN UNA VARIABLE LA POSICIÓN EN LA QUE SE ENCUENTRA EL PRODUCTO
                let pos= cart.indexOf(p);

                if(p.count !== 1){
                    //SE ACCEDE A LA POSICIÓN DEL PRODUCTO EN LA COPIA DEL CARRITO PARA RESTAR LA CANTIDAD
                    c[pos].count = p.count - 1;
                    setCart(c);

                    //SE ACCEDE A LA POSICIÓN DEL PRODUCTO EN LA COPIA DEL CARRITO PARA RESTAR LA CANTIDAD
                    setValue(value-p.item.producto.item.price)

                    //SE ACCEDE A LA POSICIÓN DEL PRODUCTO EN LA COPIA DEL CARRITO PARA RESTAR LA CANTIDAD
                    setTot(tot-1)
                }

            }
        }
    }

    //MÉTODO ENCARGADO DE AGREGAR PRODUCTOS
    const agregar = () => {

        //SE CREA UNA COPIA DEL CARRITO
        let c = cart;

        //SE ANALIZAN TODAS LAS POSICIONES DEL CARRITO HASTA ENCONTRAR EL PRODUCTO ACTUAL EN SÍ
        for(let p of cart){

            //AL ENCONTRARSE EL PRODUCTO EN EL CARRITO
            if(producto.item.producto.id === p.item.producto.id){

                //SE ALMACENA EN UNA VARIABLE LA POSICIÓN EN LA QUE SE ENCUENTRA EL PRODUCTO
                let pos= cart.indexOf(p);

                if(p.count === p.item.producto.item.stock){
                    alert('Limite de stock alcanzado')
                }else{

                    //SE ACCEDE A LA POSICIÓN DEL PRODUCTO EN LA COPIA DEL CARRITO PARA RESTAR LA CANTIDAD
                    c[pos].count = p.count + 1;
                    setCart(c);

                    //SE ACCEDE A LA POSICIÓN DEL PRODUCTO EN LA COPIA DEL CARRITO PARA RESTAR LA CANTIDAD
                    setValue(value+p.item.producto.item.price)

                    //SE ACCEDE A LA POSICIÓN DEL PRODUCTO EN LA COPIA DEL CARRITO PARA RESTAR LA CANTIDAD
                    setTot(tot+1)

                }

            }
        }

    }

    return(

        
        <div className="card mb-3 contenedorProducto">

            <div className="row" no-gutters='true'>

                <div className="col-md-4 contenedorProducto__CardImg">
                    <img src={producto.item.producto.item.image} alt={producto.item.producto.nombre} className="contenedorProducto__Img"></img>
                </div>

                <div className="col-md-8 contenedorProducto__Card">
                    
                    <div className="card-body">

                        <h5 className="contenedorProducto__Titulo">{`${producto.item.producto.item.name}`}</h5>
                        <p className="contenedorProducto__Precio">{`Precio: $${producto.item.producto.item.price}`}</p>
                        <p className="contenedorProducto__Stock">{`Stock: ${producto.item.producto.item.stock}`}</p>

                        <div className="contenedorProducto__Mod">
                            <i className="fas fa-angle-left contenedorProducto__ModQuitar" onClick={quitar}></i>
                            <p className="contenedorProducto__Cantidad">{`Cantidad: ${producto.count}`}</p>
                            <i className="fas fa-angle-right contenedorProducto__ModAgregar" onClick={agregar}></i>
                        </div>

                        <p className="contenedorProducto__PrecioTotal">{`Precio total: $${producto.item.producto.item.price*producto.count}`}</p>
                        
                        
                    </div>

                </div>

            </div>

            <div className="contenedorProducto__Eliminar">
                <button onClick={removeItem} className="contenedorProducto__EliminarBoton">Eliminar producto</button>
            </div>

            
            

        </div>
       
    )
}


export default Cart;