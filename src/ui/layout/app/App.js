import React,{useState,useEffect} from 'react';
import './app.scss';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main'
import {BrowserRouter} from 'react-router-dom'
import cb1 from '../../../assets/img/productos/1.jpg'
import cb2 from '../../../assets/img/productos/2.jpg'
import cb3 from '../../../assets/img/productos/3.jpg'
import cn1 from '../../../assets/img/productos/17.jpg'
import cn2 from '../../../assets/img/productos/18.jpg'
import cn3 from '../../../assets/img/productos/19.jpg'
import ca1 from '../../../assets/img/productos/59.jpg'
import ca2 from '../../../assets/img/productos/60.jpg'


const App = () => {
  
  //SE CREA UN ESTADO QUE ALMACENA LAS CATEGORIAS DEL SITIO WEB
  const [categorias,setCategorias] = useState([]);

  //SE CREA UN ESTADO QUE ALMACENA LOS PRODUCTOS
  const[productos,setProductos] = useState([]);


  //SE CREA UN EFECTO SECUNDARIO QUE HACE DOS PEDIDOS, A LAS CATEGORIAS DEL SITIO WEB Y A LOS PRODUCTOS
  useEffect(() => {
    
    //SE CREA UNA PROMISE QUE OBTIENE LAS CATEGORIAS DEL SITIO WEB
    let cat = new Promise((res,rej) => {
          
      //SE SIMULA LA INFORMACIÓN OBTENIDA DE UNA BASE DE DATOS
      let categorias = `
      [{
        "id": 1,
        "categoria": "Calzado Bebés"
      }, {
        "id": 2,
        "categoria": "Calzado Niñas"
      }, {
        "id": 3,
        "categoria": "Calzado Adolescentes"
      }]
      `

      //SE CONVIERTE EL JSON DE LA BASE DE DATOS A OBJETO
      let categoriasObjeto = JSON.parse(categorias);
      

      //SE CAMBIA EL ESTADO DE LA PROMESA A FULFILLED Y SE AÑADE COMO VALOR LA INFORMACIÓN OBTENIDA DE LA BASE DE DATOS
      res(categoriasObjeto);
        
    });

    //SE CREA UNA PROMISE QUE OBTIENE LOS PRODUCTOS
    let prod = new Promise((res,rej) => {
        
      //SE SIMULA LA INFORMACIÓN OBTENIDA DE UNA BASE DE DATOS CON UN DELAY DE 2 SEGUNDOS
      setTimeout(( ) => {
        
        let productos = `
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
        let databaseObjeto = JSON.parse(productos);

        //SE CAMBIA EL ESTADO DE LA PROMESA A FULFILLED Y SE AÑADE COMO VALOR LA INFORMACIÓN OBTENIDA DE LA BASE DE DATOS
        res(databaseObjeto);

      },2000)
      
    })

    //SI LA PROMISE DE LAS CATEGORIAS SE CUMPLE, CAMBIA EL ESTADO DE LAS CATEGORIAS
    cat.then((categorias) => {
      setCategorias(categorias);
    });
    
    //SI LA PROMISE DE LOS PRODUCTOS SE CUMPLE, CAMBIA EL ESTADO DE LOS PRODUCTOS
    prod.then((data) => {
      setProductos(data);
    })

  }, [])


    

    return (

        <BrowserRouter>

            <Header />

            <Navbar categorias={categorias}/>

            <Main categorias={categorias} productos={productos}/>

        </BrowserRouter>

    )
}









export default App;
