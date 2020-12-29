import React from 'react';
import './item.scss';
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';






const Item = ({producto}) => {



    const [visible,setVisible] = React.useState(false);

    let cambiarVisible = (()=>{
        setVisible(!visible);
    })

    return (
        <>
        

            <div className="galeriaProductos__Card" onClick={cambiarVisible}>

                <img src={producto.img} alt="Calzado Bebé" className="galeriaProductos__Img"/>

                {visible ? <ItemDetailContainer producto={producto}/> : null}

            </div>
    
       
        </>
    )
}


export default Item;