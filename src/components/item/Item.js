import React from 'react';
import './item.scss';
import ItemCount from '../itemCount/ItemCount';




const Item = ({nombre, precio, stock, img, initial}) => {

    return (
        <>
        

            <div className="galeriaProductos__Card">

            <img src={img} alt="Calzado Bebé" className="galeriaProductos__Img"></img>

            </div>


            <div className="galeriaProductos__Detalles">
                <p className="galeriaProductos__Nombre">{nombre}</p>
                <p className="galeriaProductos__Precio">{precio}</p>
                <p className="galeriaProductos__Stock">Stock: {stock}</p>
                <ItemCount initial={initial} stock={stock}/>
            </div>
            
       
        </>
    )
}


export default Item;