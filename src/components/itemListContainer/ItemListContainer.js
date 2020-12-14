import React from 'react';
import './itemListContainer.scss';
import ItemCount from '../itemCount/ItemCount'


const ItemListContainer = ({greeting}) =>

<>
<h1 className="greeting">{greeting}</h1>


{/* SIMULADOR DE PRODUCTO */}
<div className="simulacionProducto">

    <div className="cardProducto">
        <div className="cardContenedor">
            <img src="https://via.placeholder.com/250" className="imgProducto"></img>
        </div>
    </div>

    <div className="infoProducto">
        <h2 className="nombreProducto">Nombre producto</h2>
        <h3 className="precioProducto">Precio</h3>
        <h3 className="stockProducto">Stock= 20</h3>
    </div>

    <ItemCount initial="1" stock="20"/>
        
</div>
</>

export default ItemListContainer;