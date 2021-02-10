import React, {useState,useContext} from 'react';
import contexto from '../../../../api/context/contexto'
import {firestore} from '../../../../api/firebase/firebase'

const OrderPurchase = () => {

    //SE CONSUME EL CONTEXTO CON EL VALOR DEL CARRITO Y SUS PRODUCTOS AGREGADOS
    const {cart, value} = useContext(contexto);

    //ESTADO QUE ALMACENA EL NOMBRE DEL USUARIO
    const [name,setName] = useState(null);

    //ESTADO QUE ALMACENA EL APELLIDO DEL USUSARIO
    const [surname,setSurname] = useState(null);

    //ESTADO QUE ALMACENA EL MAIL DEL USUARIO
    const [mail,setMail] = useState(null);

    //ESTADO QUE ALMACENA EL TELÉFONO DEL USUARIO
    const [phone,setPhone] = useState(null);

    //ESTADO QUE ALMACENA LOS COMENTARIOS DEL USUARIO
    const [com,setCom] = useState(null);

    //ESTADO QUE ALMACENA EL ID DEL PRODUCTO
    const [id,setId] = useState(null);

    //EVENTO ENCARGADO DE EVALUAR EL INGRESO DEL USUARIO CON EL DATO DEL NOMBRE
    let nombre = (e) => {

        //SE ALMACENA EL VALOR DEL NOMBRE DEL USUARIO EN SU ESTADO
        setName(e.target.value)

    }
    //EVENTO ENCARGADO DE EVALUAR EL INGRESO DEL USUARIO CON EL DATO DEL APELLIDO
    let apellido = (e) => {

        //SE ALMACENA EL VALOR DEL APELLIDO DEL USUARIO EN SU ESTADO
        setSurname(e.target.value)

    }
    //EVENTO ENCARGADO DE EVALUAR EL INGRESO DEL USUARIO CON EL DATO DEL MAIL
    let email = (e) => {

        //SE ALMACENA EL VALOR DEL MAIL DEL USUARIO EN SU ESTADO
        setMail(e.target.value)

    }
    //EVENTO ENCARGADO DE EVALUAR EL INGRESO DEL USUARIO CON EL DATO DEL TELÉFONO
    let telefono = (e) => {

        //SE ALMACENA EL VALOR DEL TELÉFONO DEL USUARIO EN SU ESTADO
        setPhone(e.target.value)

    }
    //EVENTO ENCARGADO DE VALIDAR QUE EL INGRESO DEL USUARIO SEAN SÓLO NÚMEROS
    let validador = (e) => {

        e.stopPropagation();

        if(e.keyCode===8){
            
        }else if(e.keyCode<48||e.keyCode>57){
            e.preventDefault();
        }
        
    }
    //EVENTO ENCARGADO DE EVALUAR EL INGRESO DEL USUARIO CON EL DATO DE LOS COMENTARIOS
    let comentarios = (e) => {

        //SE ALMACENA EL VALOR DE LOS COMENTARIOS DEL USUARIO EN SU ESTADO
        setCom(e.target.value);
    }
    

    //TRIGGER EJECUTADO A PARTIR DE LA ORDEN CREADA DEL USUARIO
    let purshase = (e) => {

        if(cart.length===0){

            e.preventDefault();

            alert('NO HAY PRODUCTOS EN EL CARRITO')

        }else{

            if(name.length<2){

                e.preventDefault();
                alert('Ingrese un nombre con más de dos letras');

            }else if(surname.length<2){

                e.preventDefault();
                alert('Ingrese un apellido con más de dos letras')

            }else if(mail.length<5){

                e.preventDefault();
                alert('Ingrese un mail válido')

            }else if(phone.length<10){

                e.preventDefault();
                alert('Ingrese un número de teléfono válido')

            }else{
                
                //SE CREA UN ARRAY QUE ALMACENARÁ LOS DATOS DE CADA PRODUCTO AGREGADO PARA CREAR LA ORDEN
                let itemsOrder = [];

                //SE ANALIZA POSICIÓN POR POSICIÓN EL CARRITO PARA IDENTIFICAR LOS DATOS DE CADA PRODUCTO
                for(let p of cart){

                    let item = {'id':p.item.producto.id ,'name':p.item.producto.item.name,'price':p.item.producto.item.price,'quantity':p.count};

                    itemsOrder.push(item);
                }

                //SE CREA EL OBJETO DE LA ORDEN RECIBIDA
                let newOrder = {'buyer':{'name':name, 'surname':surname, 'mail':mail, 'phone':phone},'items':itemsOrder,'total': value, 'comments':com};

                //SE ALMACENA EN UNA CONSTANTE LA INSTANCIA DE LA BASE DE DATOS
                const db = firestore;

                // // //SE AGREGA UN NUEVO DOCUMENTO A LA COLLECCIÓN ORDER
                db.collection('order').add(newOrder)
                .then(({id})=>{

                 setId(id);

                alert('Orden creada con el identificador '+id)

                })
                .catch((error)=>{
                    console.log(error)
                })
            }

            

        }
    }


    return(

    <div className="row">

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <form action="#" method="#" className="formularioContacto">

                
                <div className="form-row formularioContacto__Secciones formularioContacto__Secciones--Syne formularioContacto__Secciones--darkBebote">
                    {/* NOMBRE */}
                    <div className="form-group col-md-6 headline">
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" className="form-control" id="Nombre" onChange={nombre} maxLength="20"/>
                    </div>

                    {/* APELLIDO */}
                    <div className="form-group col-md-6 headline">
                        <label htmlFor="Apellido">Apellido</label>
                        <input type="text" className="form-control" id="Apellido" onChange={apellido} maxLength="20"/>
                    </div> 
                </div>

                <div className="form-row formularioContacto__Secciones formularioContacto__Secciones--Syne formularioContacto__Secciones--darkBebote">
                    {/* EMAIL */}
                    <div className="form-group col-md-6 headline">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" id="Email" onChange={email} maxLength="30"/>
                    </div>

                    {/* TELÉFONO */}
                    <div className="form-group col-md-6 headline">
                        <label htmlFor="Teléfono">Teléfono</label>
                        <input type="text" className="form-control" id="Teléfono" onKeyDown={validador} onChange={telefono} maxLength="12"/>
                    </div>
                </div>

                {/* COMENTARIOS */}
                <div className="form-row formularioContacto__Secciones formularioContacto__Secciones--Syne formularioContacto__Secciones--darkBebote">
                    <div className="form-group col-md-12 headline">
                        <label htmlFor="Comentarios">Comentarios (Opcional)</label>
                        <textarea className="form-control" id="Comentarios" rows="3" maxLength="500" onChange={comentarios}></textarea>
                    </div>
                </div>

                <button className="btn btn-danger" type="submit" onClick={purshase}>Enviar Orden de Compra</button>
                
            </form>
        </div>

    </div>

    )
}

export default OrderPurchase;