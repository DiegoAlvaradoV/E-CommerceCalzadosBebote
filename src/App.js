import React from 'react';
import './app.scss';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';


const App = () =>

<>

<Header />

<Navbar />

<ItemListContainer greeting='BIENVENIDO/A A CALZADOS BEBOTE'/>

</>

export default App;
