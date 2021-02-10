import React from 'react';
import './itemList.scss';
import Item from '../item/Item'


const ItemList = ({productos}) => {


    return (
        <>
        
            <div className="row row-cols-1 row-cols-md-4 contenedorGaleria">


                {productos.map((producto) => {

                    return(
                        
                        <div className="col-6 col-xs-6 col-sm-4  galeriaProductos" id={producto.id} key={producto.id}>

                            <Item producto={producto}/>

                        </div>
                        
                    )
                    
                })}

            </div>
        </>
    )
}


export default ItemList;