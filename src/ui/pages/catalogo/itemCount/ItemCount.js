import React from 'react';
import './itemCount.scss';

const ItemCount = ({initial,stock}) =>{


    const [contador,setContador] = React.useState(initial);

    return(
        
        <div className="modProducto">
            
            <div className="contadorProducto">
                
                <i className="fas fa-angle-left contadorProducto__Menos"
                onClick={()=>{
                    if(contador>initial){
                        setContador(contador-1);
                    }
                }}></i>
                
                <p className="contadorProducto__Contador">{contador}</p>
                
                <i className="fas fa-angle-right contadorProducto__Mas"
                onClick={()=>{
                    if(contador<stock){
                        setContador(contador+1);
                    }
                }}></i>
            </div>

            <div className="botonProducto">
                <button className="botonProducto__Agregar">AGREGAR AL CARRITO</button>
            </div>

        </div>
        
    )
}


export default ItemCount;