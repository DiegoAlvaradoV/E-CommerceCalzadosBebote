import React,{useState,useEffect} from 'react';
import './itemListContainer.scss';
import database from '../../../../database/database.json'
import ItemList from '../itemList/ItemList';
import Spinner from '../../../widget/spinner/Spinner'

const ItemListContainer = ({greeting,categoria,rProductos}) => {

  //SE CREA UN ESTADO QUE ALMACENA LOS PRODUCTOS DE LA BASE DE DATOS
  const [productos,setProductos] = useState([]);

  //SE CREA UN EFECTO QUE HACE EL LLAMADO A LA BASE DA DATOS
  useEffect(() => {

    //SE GENERA LA PROMESA QUE LISTA LOS PRODUCTOS DESDE LA BASE DE DATOS
    const listProducts = new Promise((res)=>{

      setTimeout(() => {

        res(database)

      }, 2000);

    })

    //AL CUMPLIRSE LA PROMESA SE ENVÍA ESOS DATOS AL ESTADO DE PRODUCTOS Y A LA FUNCIÓN DE SUBIDA
    listProducts.then((res)=>{

      rProductos(res);

      //A PARTIR DE LA CATEGORÍA SELECCIONADA, SE MUESTRA UNOS PRODUCTOS U OTROS
      if(categoria == undefined){

        setProductos(res);

      }else if(categoria == "Bebés"){

        let bebes = [];

        res.forEach(producto => {

          if(producto.categoria == categoria){
            bebes.push(producto);
          }
          
        });

        setProductos(bebes);
        
      }else if(categoria == "Niñas"){

        let ninas = [];

        res.forEach(producto => {

          if(producto.categoria == categoria){
            ninas.push(producto);
          }
          
        });

        setProductos(ninas);

      }else if(categoria == "Adolescentes"){

        let adolescentes = [];

        res.forEach(producto => {

          if(producto.categoria == categoria){
            adolescentes.push(producto);
          }
          
        });

        setProductos(adolescentes);

      }

    })

  }, [])

  

    return(

        <>

          <h1 className="greeting">{greeting}</h1>
        
          {productos.length == 0 ? <Spinner/> : <ItemList productos={productos}/>}


        </>
    )
}



export default ItemListContainer;