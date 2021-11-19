import { context } from "../Contexts/CartContext";
import { useContext } from "react";

const CartItem = ({producto, cantidad}) => {

    const {quitar} = useContext(context);

    const remove = () =>{
        quitar(producto);
    }

    return (
        <>
            <div id={producto.id} >
                <img src={producto.img} width={250} alt="" />
                <p> {producto.nombre} </p>
                <p>Precio: ${producto.precio} Cantidad: {cantidad}</p>
                <p>Subtotal: $ {producto.precio * cantidad} </p>
                <button onClick={remove}>Quitar</button>
            </div>
        </>
    )
}

export default CartItem
