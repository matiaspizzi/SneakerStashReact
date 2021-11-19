import { context } from "../Contexts/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";


function Cart() {
    
    const {carrito} = useContext(context);
    const {vaciar} = useContext(context);
    
    

    if(carrito.length>0){

        return (
            <>
                {
                    carrito.map((item) => {
            
                        return (
                            
                            <CartItem producto={item.producto} cantidad={item.cantidad} key={item.producto.id}/>
                                
                        )
                    })
                }
                <button onClick={vaciar}> VACIAR CARRITO</button>
                <button> TERMINAR COMPRA</button>
            </>
        )
    } else {

        return(
            <>
                <p>CARRITO VACIO</p>
                <Link to={"/"}>
                    <button >VOLVER AL INICIO</button>
                </Link>
            </>
        )
    }
    
}

export default Cart;
