import React,{useState} from 'react';
import './itemDetail.scss';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({producto}) => {



    const [count,setCount] = useState(producto.initial);
    const [btn,setBtn] = useState(true);

    const onAdd = (contador) => {
        setCount(contador);
    }

    const sBtn = () => {

        setBtn(false);

    }


    return(

        <>

            <div className="galeriaProductos__Detalles">
                <p className="galeriaProductos__Nombre">{producto.nombre}</p>
                <img src={producto.img} alt={producto.nombre} className="galeriaProductos__Img"/>
                <p className="galeriaProductos__Precio">{`$${producto.precio}`}</p>
                <p className="galeriaProductos__Stock">Stock: {producto.stock}</p>
            </div>



            <ItemCount initial={producto.initial} stock={producto.stock} onAdd={onAdd}/>

            <div className="botonProducto">
                {btn ? <button  className="botonProducto__Trigger" onClick={sBtn}>¿Desea agregar {count} {producto.nombre} al carrito?</button> : <Link to="/cart"><button className="botonProducto__Trigger" >Terminar Compra</button></Link>}
            </div>
            
            

        </>

    )
}



export default ItemDetail;