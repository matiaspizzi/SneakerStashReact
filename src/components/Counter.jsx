import {useState} from "react";
import { Link } from "react-router-dom";


const ItemCount = ({ onAdd, stock }) => {

    const [cont, setCont] = useState(1);
    
    const confirmar = () =>{
        onAdd (cont);
    }

    const agregar = () =>{
        if(cont < stock){
            setCont(cont + 1);
        }
    }

    const quitar = () =>{
        if(cont > 1){
            setCont(cont - 1);
        } 
    }

    return (
        <>
            <p>Stock:{stock}</p>

            <div id="contador">
                <button onClick={quitar} className="material-icons">remove</button>
                <p>Cantidad: {cont}</p>
                <button onClick={agregar} className="material-icons">add</button>
            </div>

            <Link to={"/cart"}>
                <button onClick={confirmar} type="button" className="btn" id="btn__carrito"><p>Agregar al Carrito</p><img src="../../../Multimedia/iconos/cart-plus-solid.svg" id="img__cart" alt="icono carrito"/></button>
            </Link>
        </>
    )
}

export default ItemCount;
