import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom';






const Item = ({producto}) => {



    return (
        <>
        

            <div className="galeriaProductos__Card">

                <Link to={`/${producto.nombre}/${producto.id}`}>
                    <img src={producto.img} alt={producto.nombre} className="galeriaProductos__Img"/>
                </Link>

            </div>
    
       
        </>
    )
}


export default Item;