import React from 'react';
import './itemListContainer.scss';
import ItemList from '../itemList/ItemList';
import Spinner from '../spinner/Spinner'


const ItemListContainer = ({greeting,productos}) => {

    

    return(
        <>

            <h1 className="greeting">{greeting}</h1>

        
        
        {productos.length == 0 ? <Spinner/> : <ItemList productos={productos}/>}

        </>
    )
}



export default ItemListContainer;