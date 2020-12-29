import React from 'react';
import './main.scss';
import ItemListContainer from '../../pages/catalogo/itemListContainer/ItemListContainer';
import {Route, Switch} from 'react-router-dom';
import ItemDetailContainer from '../../pages/catalogo/itemDetailContainer/ItemDetailContainer';



const Main = ({categorias,productos}) => {


    return (

        <main>


            <Switch>

                <Route path="/" exact>
                    <ItemListContainer greeting='BIENVENIDO/A A CALZADOS BEBOTE' productos={productos}/>
                </Route>


                {categorias.map((categoria)=>{

                    
                    return(
                        <Route path={`/${categoria.categoria}/${categoria.id}`} key={categoria.id}>
                            <ItemListContainer greeting={categoria.categoria} productos={productos} categoria={categoria.id} />
                        </Route>
                    )

                })}


                {productos.map((producto)=>{

                    return(
                        <Route path={`/${producto.nombre}/${producto.id}`} key={producto.id}>
                            <ItemDetailContainer producto={producto}/>
                        </Route>
                    )

                })}

            </Switch>
            
            

        </main>

    )
}









export default Main;