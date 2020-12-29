import React from 'react';
import './itemDetailContainer.scss';
import '../itemDetail/ItemDetail'
import ItemDetail from '../itemDetail/ItemDetail';



const ItemDetailContainer = ({producto}) => {


    return (
        <>
        
            <div className="contenedorDetalles">

                <ItemDetail producto={producto}/>

            </div>
        </>
    )
}



export default ItemDetailContainer;