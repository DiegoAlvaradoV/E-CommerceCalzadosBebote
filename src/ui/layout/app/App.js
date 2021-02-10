import React from 'react';
import './app.scss'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Main from '../main/Main'
import CartContext from '../../../api/context/CartContext'
import Footer from '../footer/Footer'
import {BrowserRouter} from 'react-router-dom'


const App = () => {

    return (

        <BrowserRouter>

        <Header/>
        
        <CartContext >
            <Navbar categorias={[{'id': 1, 'categoria': 'Calzado Bebés'},{'id': 2, 'categoria': 'Calzado Niñas'},{'id': 3, 'categoria': 'Calzado Adolescentes'}]}/>
            <Main/>
        </CartContext> 

        <Footer/>

        </BrowserRouter>

    )
}

 
export default App;