import React from 'react';
import './main.scss';
import ItemListContainer from '../../pages/catalogo/itemListContainer/ItemListContainer';
import {Route, Switch} from 'react-router-dom';



const Main = ({categorias}) => {


    

    return (

        <main>


            <Switch>

                 <Route path="/" exact>
                    <ItemListContainer greeting='BIENVENIDO/A A CALZADOS BEBOTE'/>
                </Route>


                {categorias.map((categoria)=>{

                    
                    return(
                        <Route path={`/${categoria.categoria}/${categoria.id}`} key={categoria.id}>
                            <ItemListContainer greeting={categoria.categoria} categoria={categoria.id}/>
                        </Route>
                    )
                })}

            </Switch>
            
            

        </main>

    )
}









export default Main;