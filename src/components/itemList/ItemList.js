import React from 'react';
import './itemList.scss';
import Item from '../item/Item'


const ItemList = ({productos}) => {


    return (
        <>
        
            <div className="row row-cols-1 row-cols-md-4 contenedorGaleria">


                {productos.map((elementos) => {

                    return(
                        
                        <div className="col-6 col-xs-6 col-sm-4  galeriaProductos" id={elementos.id} key={elementos.id}>
                            <Item nombre={elementos.nombre} precio={elementos.precio} stock={elementos.stock} img={elementos.img} initial={elementos.initial}/>
                        </div>
                        
                    )
                })}

            </div>
        </>
    )
}


export default ItemList;