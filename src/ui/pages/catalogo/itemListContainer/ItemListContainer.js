import React,{useState,useEffect} from 'react';
import './itemListContainer.scss';
import ItemList from '../itemList/ItemList';
import Spinner from '../../../widget/spinner/Spinner'


const ItemListContainer = ({greeting,productos,categoria}) => {
  
  //SE CREA UN ESTADO QUE ALMACENE LOS PRODUCTOS TRAIDOS DE LA BASE DE DATOS
  const [prod,setProd] = useState([]);

  //SE CREA UN ESTADO QUE ALAMCENE LAS CATEGORIAS TRAIDAS DE LA BASE DE DATOS
  const [cat] = useState(categoria);

  //SE CREA UN EFECTO SECUNDARIO QUE GENERE EL CAMBIO DEL ESTADO A PARTIR DE LA CATEGORIA INGRESADA
  useEffect(() => {
    
    //SE CREA UN ARRAY DE PRODUCTOS DIVIDIDO EN LAS DIFERENTES CATEGORIAS
    let databaseBebes=[]; 
    let databaseNinas=[];
    let databaseAdolescentes=[];

    //SE ALMACENA LA INFORMACIÓN DE CADA CATEGORÍA DE LOS PRODUCTOS
    productos.forEach(producto => {

      //SE AGREGA CADA PRODUCTO A CADA CATEGORIA DISPONIBLE
      if(producto.id<=3){
        databaseBebes.push(producto);
      }else if(producto.id<=6){
        databaseNinas.push(producto)       
      }else if(producto.id<=8){
        databaseAdolescentes.push(producto);
      }

    });

    //A PARTIR DE LA CATEGORÍA SELECCIONADA SE MUESTRAN LOS PRODUCTOS
    if(cat==undefined){
      setProd(productos);
    }else if(cat==1){
      setProd(databaseBebes)
    }else if(cat==2){
      setProd(databaseNinas)
    }else if(cat==3){
      setProd(databaseAdolescentes)
    }


  })

    return(

        <>

            <h1 className="greeting">{greeting}</h1>
        
            {prod.length == 0 ? <Spinner/> : <ItemList productos={prod}/>}


        </>
    )
}



export default ItemListContainer;