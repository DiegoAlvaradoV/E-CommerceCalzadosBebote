import React, {useContext} from 'react';
import './cartWidget.scss';
import contexto from '../../../api/context/contexto'
import {Link} from 'react-router-dom';


const CartWidget = () => {

    const {tot} = useContext(contexto);

return(

    <Link to="/cart" className="cart text-decoration-none">
        

        <i className="fas fa-shopping-cart cartWidget"></i>

        {/* CONTADOR DE PRODUCTOS TOTALES AGREGADOS AL CARRITO */}
        {tot === 0 
        
        ? 
        
        null 
        
        : 
        
        <div className="cartCount">
            <p className="cartCount__Count">{tot}</p>
        </div>
        
        }
        
        
    </Link>
    
      
)

}

export default CartWidget;