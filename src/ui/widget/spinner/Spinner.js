import React from 'react';
import './spinner.scss';


let Spinner = () => {

    return(

         <div className="spinnerContainer">

            <div className="spinner-border spinner" role="status">

                <span className="sr-only">Cargando...</span>

            </div>

         </div>
        
    )
}


export default Spinner;