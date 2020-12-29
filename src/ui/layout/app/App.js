import React,{useState,useEffect} from 'react';
import './app.scss';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main'
import {BrowserRouter} from 'react-router-dom'


const App = () => {

    const [categorias,setCategorias] = useState([]);


    //SE CREA UN EFECTO SECUNDARIO PARA REALIZAR EL PEDIDO DE LOS PRODUCTOS A LA BASE DE DATOS
    useEffect(()=>{

        //SE CREA UNA PROMISE QUE OBTIENE LOS DATOS SIMULANDO UN DELAY DE 2 SEGUNDOS
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
  
  
  
        cat.then((categorias) => {
          setCategorias(categorias);
        });
  
      },[])


    

    return (

        <BrowserRouter>

            <Header />

            <Navbar categorias={categorias}/>

            <Main categorias={categorias}/>

        </BrowserRouter>

    )
}









export default App;
