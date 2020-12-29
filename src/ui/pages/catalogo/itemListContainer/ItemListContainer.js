import React,{useState,useEffect} from 'react';
import './itemListContainer.scss';
import ItemList from '../itemList/ItemList';
import Spinner from '../../../widget/spinner/Spinner'
import cb1 from '../../../../assets/img/productos/1.jpg'
import cb2 from '../../../../assets/img/productos/2.jpg'
import cb3 from '../../../../assets/img/productos/3.jpg'
import cn1 from '../../../../assets/img/productos/17.jpg'
import cn2 from '../../../../assets/img/productos/18.jpg'
import cn3 from '../../../../assets/img/productos/19.jpg'
import ca1 from '../../../../assets/img/productos/59.jpg'
import ca2 from '../../../../assets/img/productos/60.jpg'

const ItemListContainer = ({greeting,categoria}) => {


    //SE CREA UN ESTADO QUE ALMACENE LOS PRODUCTOS TRAIDOS DE LA BASE DE DATOS
    const [productos,setProductos] = useState([]);

    const [cat] = useState(categoria);



    //SE CREA UN EFECTO SECUNDARIO PARA REALIZAR EL PEDIDO DE LOS PRODUCTOS A LA BASE DE DATOS
    useEffect(()=>{

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
              "img": "${cb1}",
              "initial": 1
            }, {
              "id": 2,
              "nombre": "Calzado Bebé 02",
              "precio": 3605,
              "stock": 14,
              "img": "${cb2}",
              "initial": 1
            }, {
              "id": 3,
              "nombre": "Calzado Bebé 03",
              "precio": 3706,
              "stock": 82,
              "img": "${cb3}",
              "initial": 1
            }, {
              "id": 4,
              "nombre": "Calzado Niña 01",
              "precio": 3790,
              "stock": 98,
              "img": "${cn1}",
              "initial": 1
            }, {
              "id": 5,
              "nombre": "Calzado Niña 02",
              "precio": 3745,
              "stock": 60,
              "img": "${cn2}",
              "initial": 1
            }, {
              "id": 6,
              "nombre": "Calzado Niña 03",
              "precio": 3120,
              "stock": 23,
              "img": "${cn3}",
              "initial": 1
            }, {
              "id": 7,
              "nombre": "Calzado Adolescente 01",
              "precio": 3890,
              "stock": 45,
              "img": "${ca1}",
              "initial": 1
            }, {
              "id": 8,
              "nombre": "Calzado Adolescente 02",
              "precio": 3111,
              "stock": 8,
              "img": "${ca2}",
              "initial": 1
            }]
          `

          //SE CONVIERTE EL JSON DE LA BASE DE DATOS A OBJETO
          let databaseObjeto = JSON.parse(database);

          //SE CAMBIA EL ESTADO DE LA PROMESA A FULFILLED Y SE AÑADE COMO VALOR LA INFORMACIÓN OBTENIDA DE LA BASE DE DATOS
          res(databaseObjeto);

        }, 2000);

      });

      //SE CREA UN ARRAY VACÍO PARA CADA SECCIÓN DE LA TIENDA, PARA ASÍ CREAR SUS RESPECTIVOS PRODUCTOS
      let databaseBebes=[]; 
      let databaseNinas=[];
      let databaseAdolescentes=[];

      
      data.then((data) => {

        //SE ALMACENA LA INFORMACIÓN DE CADA CATEGORÍA DE LOS PRODUCTOS
        data.forEach(data => {
          
          if(data.id<=3){
            databaseBebes.push(data);
          }else if(data.id<=6){
            databaseNinas.push(data)
            
          }else if(data.id<=8){
            databaseAdolescentes.push(data);
          }

        });


        if(cat==undefined){
          setProductos(data);
        }else if(cat==1){
          setProductos(databaseBebes)
        }else if(cat==2){
          setProductos(databaseNinas)
        }else if(cat==3){
          setProductos(databaseAdolescentes)
        }
        
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