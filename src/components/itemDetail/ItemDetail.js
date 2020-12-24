import React from 'react';
import './itemDetail.scss';
import ItemCount from '../itemCount/ItemCount';


const ItemDetail = ({producto}) => {

    

    return(
        <>

            <div className="galeriaProductos__Detalles">
                <p className="galeriaProductos__Nombre">{producto.nombre}</p>
                <p className="galeriaProductos__Precio">{producto.precio}</p>
                <p className="galeriaProductos__Stock">Stock: {producto.stock}</p>
            </div>
            

        </>
    )
}



export default ItemDetail;