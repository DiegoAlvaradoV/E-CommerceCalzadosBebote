import React,{useState,useEffect} from 'react';
import './itemListContainer.scss';
import ItemList from '../itemList/ItemList';
import Spinner from '../../../widget/spinner/Spinner'


const ItemListContainer = ({producto,categoria,greeting}) => {

  //SE CREA UN ESTADO QUE ALMACENA LOS PRODUCTOS DE LA BASE DE DATOS
  const [productos,setProductos] = useState([]);

  //SE CREA UN EFECTO QUE LISTA LOS PRODUCTOS SEGÚN LA CATEGORIA RECIBIDA
  useEffect(()=>{

    //SE CREAN VARIABLES ENCARGADAS DE CONTENER CADA PRODUCTO
    let calzadoBebes = [];
    let calzadoNinas = [];
    let calzadoAdolescentes = [];
    
    //SI SE PIDEN TODAS LAS CATEGORIAS
    if(categoria===0){

      setProductos(producto)

    //SI SÓLO SE PIDEN LOS PRODUCTOS DE BEBÉS  
    }else if(categoria===1){
      
      for(let p of producto){

        if(p.item.categoryId===1){
          calzadoBebes.push(p)
        }
      }

      setProductos(calzadoBebes)

    //SI SÓLO SE PIDEN LOS PRODUCTOS DE BEBÉS  
    }else if(categoria===2){

      for(let p of producto){

        if(p.item.categoryId===2){
          calzadoNinas.push(p)
        }
      }

      setProductos(calzadoNinas)

    //SI SÓLO SE PIDEN LOS PRODUCTOS DE BEBÉS  
    }else if(categoria===3){

      for(let p of producto){

        if(p.item.categoryId===3){
          calzadoAdolescentes.push(p)
        }
      }

      setProductos(calzadoAdolescentes)

    //CASO DE ERROR  
    }else{
      console.log('error')
    }

  },[categoria,producto]);

  console.log(productos)
  

  return(

        <>

          <h1 className="greeting">{greeting}</h1>
        
          {productos.length === 0 
          
          ? 

          <Spinner/> 
          
          : 

          <ItemList productos={productos}/>
          
          }

        </>
    )
}



export default ItemListContainer;