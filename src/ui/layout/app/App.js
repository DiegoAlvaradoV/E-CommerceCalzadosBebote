import React,{useState,useEffect} from 'react';
import './app.scss'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Main from '../main/Main'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
      

    return (

        <BrowserRouter>

            <Header/>

            <Navbar categorias={["Bebés","Niñas","Adolescentes"]}/>

            <Main/>

        </BrowserRouter>

    )
}

 
export default App;