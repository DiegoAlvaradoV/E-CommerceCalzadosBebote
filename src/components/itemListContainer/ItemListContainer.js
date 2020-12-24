import React from 'react';
import './itemListContainer.scss';
import ItemList from '../itemList/ItemList';
import Spinner from '../spinner/Spinner'



const ItemListContainer = ({greeting}) => {


    //SE CREA UN ESTADO QUE ALMACENE LOS PRODUCTOS TRAIDOS DE LA BASE DE DATOS
    const [productos,setProductos] = React.useState([]);


    //SE CREA UN EFECTO SECUNDARIO PARA REALIZAR EL PEDIDO DE LOS PRODUCTOS A LA BASE DE DATOS
    React.useEffect(()=>{

      //SE CREA UNA PROMISE QUE OBTIENE LOS DATOS SIMULANDO UN DELAY DE 2 SEGUNDOS
      let data = new Promise((res,rej) => {
        
        setTimeout(()=>{

          //SE SIMULA LA INFORMACIÓN OBTENIDA DE UNA BASE DE DATOS
          let database = `
          [{
              "id": 1,
              "nombre": "Calzado Bebé 01",
              "precio": 3991,
              "stock": 93,
              "img": "https://via.placeholder.com/250",
              "initial": 1
            }, {
              "id": 2,
              "nombre": "Calzado Bebé 02",
              "precio": 3605,
              "stock": 14,
              "img": "https://via.placeholder.com/250",
              "initial": 1
            }, {
              "id": 3,
              "nombre": "Calzado Bebé 03",
              "precio": 3706,
              "stock": 82,
              "img": "https://via.placeholder.com/250",
              "initial": 1
            }, {
              "id": 4,
              "nombre": "Calzado Bebé 04",
              "precio": 3790,
              "stock": 98,
              "img": "https://via.placeholder.com/250",
              "initial": 1
            }, {
              "id": 5,
              "nombre": "Calzado Bebé 05",
              "precio": 3745,
              "stock": 60,
              "img": "https://via.placeholder.com/250",
              "initial": 1
            }, {
              "id": 6,
              "nombre": "Calzado Bebé 06",
              "precio": 3120,
              "stock": 23,
              "img": "https://via.placeholder.com/250",
              "initial": 1
            }, {
              "id": 7,
              "nombre": "Calzado Bebé 07",
              "precio": 3890,
              "stock": 45,
              "img": "https://via.placeholder.com/250",
              "initial": 1
            }, {
              "id": 8,
              "nombre": "Calzado Bebé 08",
              "precio": 3111,
              "stock": 8,
              "img": "https://via.placeholder.com/250",
              "initial": 1
            }]
          `

          //SE CONVIERTE EL JSON DE LA BASE DE DATOS A OBJETO
          let databaseObjeto = JSON.parse(database);

          //SE CAMBIA EL ESTADO DE LA PROMESA A FULFILLED Y SE AÑADE COMO VALOR LA INFORMACIÓN OBTENIDA DE LA BASE DE DATOS
          res(databaseObjeto);

        }, 2000);

      });



      data.then((data) => {
        setProductos(data);
      });

    },[])

    

    return(

        <>

            <h1 className="greeting">{greeting}</h1>

        
        
            {productos.length == 0 ? <Spinner/> : <ItemList productos={productos}/>}


        </>
    )
}



export default ItemListContainer;