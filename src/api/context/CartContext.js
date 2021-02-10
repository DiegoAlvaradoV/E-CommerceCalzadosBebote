import React, { useState, useEffect } from "react";
import { Provider } from "./contexto.js";

const CartContext = ({ children }) => {

  //ESTADO ENCARGADO DE LOS PRODUCTOS DEL CARRITO
  const [cart, setCart] = useState([]);

  //ESTADO ENCARGADO DEL TOTAL DE PRODUCTOS AGREGADOS
  const [tot, setTot] = useState(0);

  //ESTADO ENCARGADO DE ALMACENAR EL VALOR TOTAL DE LOS PRODUCTOS AGREGADOS
  const [value, setValue] = useState(0);
  
  return (
    <>
      <Provider value={{ cart, setCart, tot, setTot, value, setValue }}>{children}</Provider>
    </>
  );
};

export default CartContext;