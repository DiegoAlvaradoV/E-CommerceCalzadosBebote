import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom';


const Item = ({producto}) => {



    return (
        <>
        

            <div className="galeriaProductos__Card">

                <Link to={`/${producto.item.name}/${producto.id}`}>
                    <img src={producto.item.image} alt={producto.item.name} className="galeriaProductos__Img"/>
                </Link>

            </div>
    
       
        </>
    )
}


export default Item;