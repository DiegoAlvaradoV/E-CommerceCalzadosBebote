import React,{useState, useContext} from 'react';
import './itemDetail.scss';
import ItemCount from '../itemCount/ItemCount';
import contexto from '../../../../api/context/contexto'
import { Link } from 'react-router-dom';


const ItemDetail = ({producto}) => {
    
    //SE CREA UN ESTADO QUE ALMACENA LA CANTIDAD DE PRODUCTOS SELECCIONADOS
    const [count,setCount] = useState(1);

    //FUNCIÓN ENCARGADA DE GESTIONAR LA CANTIDAD DE PRODUCTOS SELECCIONADOS
    const onAdd = (contador) => {
        setCount(contador);
    }


    //SE CREA UN ESTADO QUE DESMONTA EL BOTÓN PARA AGREGAR PRODUCTOS
    const [btn,setBtn] = useState(true);

    //FUNCIÓN ENCARGADA DE DESMONTAR EL BOTÓN PARA AGREGAR PRODUCTOS
    const sBtn = () => {

        setBtn(false);

    }


    //SE CONSUME EL CONTEXTO CON EL VALOR DEL CARRITO, LA CANTIDAD DE PRODUCTOS TOTALES Y EL PRECIO DE TODOS LOS PRODUCTOS
    const {cart, setCart, tot, setTot, value, setValue} = useContext(contexto);


    //FUNCIÓN ENCARGADA DE AGREGAR EL PRODUCTO AL CARRITO
    const addItem = () => {

        //SE CREA EL PRODUCTO A AGREGAR AL CARRITO
        const p = {'item': {producto}, count}

        //SE CREA UNA VARIABLE QUE ALMACENA EL TOTAL DE PRODUCTOS AGREGADOS AL CARRITO
        let ac = 0;

        //SE CREA UNA VARIABLE QUE ALMACENA EL VALOR TOTAL DE TODOS LOS PRODUCTOS AGREGADOS
        let total = 0;

        //SI EL ARRAY DEL CARRITO ESTÁ VACÍO, SE AÑADE EL PRODUCTO AL CARRITO
        if(cart.length===0){

            //SE AVISA QUE SE AGREGÓ LA CANTIDAD DEL PRODUCTO SELECCIONADO AL CARRITO
            console.log(`Se agregó ${producto.item.name} al carrito`)

            //SE AGREGA LA CANTIDAD DE PRODUCTOS AGREGADOS AL CONTADOR TOTAL
            ac = ac + p.count;
            setTot(ac);

            //SE AGREGA EL PRODUCTO AL CARRITO
            setCart([p])

            //SE AGREGA EL VALOR TOTAL DEL PRODUCTO AL CARRITO
            total = p.count*p.item.producto.item.price;
            setValue(total)
        
        //SI EL ARRAY DEL CARRITO NO ESTÁ VACÍO, SE EVALÚAN SUS POSICIONES    
        }else{

            //SE CREA UNA COPIA DEL CARRITO ACTUAL
            let carrito = cart;
            
            //BOOLEAN QUE SI ES REPETIDO ES TRUE, SI NO ES REPETIDO ES FALSE
            let repetido = false;


            //SE EVALUA POSICIÓN POR POSICIÓN DE CADA PRODUCTO DEL CARRITO SI COINCIDE CON EL PRODUCTO A AÑADIR
            for(let pro of cart){

                //SI UN PRODUCTO DEL CARRITO COINCIDE CON EL PRODUCTO A AÑADIR
                if(pro.item.producto.id === p.item.producto.id){

                    //CAMBIA EL ESTADO DEL BOOLEAN A TRUE
                    repetido = true;

                    //SE AVERIGUA CUAL ES LA POSICIÓN DEL ELEMENTO DENTRO DEL ARRAY QUE TIENE ESTA REPETICIÓN
                    let pos=cart.indexOf(pro);

                    //SE ALMACENA EL STOCK ACTUAL DEL PRODUCTO
                    let stock=cart[pos].item.producto.item.stock;

                    //SE CREA UNA VARIABLE QUE SUME LA CANTIDAD DE PRODUCTOS SOLICITADOS CON LOS YA AGREGADOS AL CARRITO
                    let rep = cart[pos].count + p.count;

                    //SI LOS PRODUCTOS AGREGADOS CON LOS QUE YA ESTABAN SON MENOR AL STOCK, SE AGREGA LA CANTIDAD SUMADA
                    if(rep<stock){

                        //SE MODIFICA EN LA COPIA HECHA DEL CARRITO LA CANTIDAD ACCEDIENDO A LA POSICIÓN DE LA REPETICIÓN
                        carrito[pos].count = rep;

                        //SE AGREGA LA CANTIDAD DE PRODUCTOS AGREGADOS AL CONTADOR TOTAL
                        for (let p of carrito){
                            ac = ac + p.count;
                            total = total + (p.item.producto.item.price * p.count) 
                        }
                        //SE AGREGA LA CANTIDAD DE PRODUCTOS AGREGADOS AL CONTADOR TOTAL
                        setTot(ac);
                        //SE AGREGA EL VALOR TOTAL DE LOS PRODUCTOS AGREGADOS
                        setValue(total);
                        
                        //SE AGREGA COMO NUEVO VALOR EL CARRITO CON SU CANTIDAD MODIFICADA
                        setCart(carrito);

                        //SE AVISA QUE SE AGREGÓ LA CANTIDAD EXTRA DEL PRODUCTO SELECCIONADO AL CARRITO
                        console.log(`Se agregó ${pro.item.producto.item.name} extra al carrito`)
                        
                    //SI LOS PRODUCTOS AGREGADOS CON LOS QUE YA ESTABAN SUPERAN EL STOCK, SE AGREGA LA CANTIDAD MÁXIMA DEL STOCK
                    }else if(rep>=stock){

                        //SE MODIFICA EN LA COPIA HECHA DEL CARRITO LA CANTIDAD ACCEDIENDO A LA POSICIÓN DE LA REPETICIÓN
                        carrito[pos].count = stock;

                        //SE AGREGA LA CANTIDAD DE PRODUCTOS AGREGADOS AL CONTADOR TOTAL
                        for (let p of carrito){
                            ac = ac + p.count;
                            total = total + (p.item.producto.item.price * p.count)
                        }
                        //SE AGREGA LA CANTIDAD DE PRODUCTOS AGREGADOS AL CONTADOR TOTAL
                        setTot(ac);
                        //SE AGREGA EL VALOR TOTAL DE LOS PRODUCTOS AGREGADOS
                        setValue(total);

                        //SE AGREGA COMO NUEVO VALOR EL CARRITO CON SU CANTIDAD MODIFICADA
                        setCart(carrito);

                        //SE AVISA QUE SE AGREGÓ LA CANTIDAD DEL PRODUCTO SELECCIONADO AL CARRITO, ALCANZANDO EL MÁXIMO DE STOCK
                        console.log(`Se alcanzó el limite del stock, agregando el producto ${pro.item.producto.item.name} al carrito`)
                        
                    }else{

                        console.log(`ERROR AL AGREGAR PRODUCTOS`)

                    }
                }
            }

            //SI SE COMPROBÓ QUE NO HAY ELEMENTOS REPETIDOS, EL BOOLEAN PERMANECE EN FALSO Y SE AGREGA EL PRODUCTO AL CARRITO
            if(repetido===false){

                //SE CREA UNA VARIABLE QUE ALMACENA LA CANTIDAD TOTAL DE LOS PRODUCTOS SUMADO LOS PRODUCTOS AGREGADOS
                let t = tot + p.count;
                //SE AGREGA ESA NUEVA CANTIDAD DE PRODUCTOS AL CONTADOR DE PRODUCTOS TOTALES AGREGADOS
                setTot(t);


                //SE CREA UNA VARIABLE QUE ALMACENA EL VALOR DE LOS PRODUCTOS TOTALES AGREGADOS Y SE LE SUMA EL VALOR DEL PRODUCTO AGREGADO ACTUALMENTE
                let total = value + (p.item.producto.item.price * p.count)
                //SE AGREGA EL NUEVO VALOR DE TODOS LOS PRODUCTOS AGREGADOS
                setValue(total);


                

                //SE AVISA QUE SE AGREGÓ LA CANTIDAD DEL PRODUCTO SELECCIONADO AL CARRITO
                console.log(`Se agregó ${p.item.producto.item.name} al carrito`);
                setCart([...cart,p])

            }
        }

        
    }
    



    return(

        <>

            <div className="galeriaProductos__Detalles">
                <p className="galeriaProductos__Nombre">{producto.item.name}</p>
                <img src={producto.item.image} alt={producto.item.name} className="galeriaProductos__Img"/>
                <p className="galeriaProductos__Precio">{`Precio: $${producto.item.price}`}</p>
                <p className="galeriaProductos__Stock">Stock: {producto.item.stock}</p>
            </div>


            <ItemCount initial={1} stock={producto.item.stock} onAdd={onAdd} />

            <div className="botonProducto">
                {btn ? 
                <button  className="botonProducto__Trigger" onClick={sBtn}>¿Desea agregar {count} {producto.nombre} al carrito?</button> 
                : 
                <Link to="/cart">
                    <button className="botonProducto__Trigger" onClick={addItem}>Ver Carrito</button>
                </Link>}
            </div>
            
            

        </>

    )
}



export default ItemDetail;