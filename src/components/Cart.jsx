import { context } from "../Contexts/CartContext";
import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import CartItem from "./CartItem"
import { db } from "./firebase"
import Swal from "sweetalert2";


function Cart() {
    
    const {carrito} = useContext(context);
    const {vaciar} = useContext(context);
    const {total} = useContext(context);

    const terminarCompra = () => {

        const usuario = {
            nombre : "matias",
            email : "matias@email.com",
            telefono : "1234345"
        }

        const orden = {
            buyer : usuario,
            items : carrito,
            total : 100
            // date : firebase.firestore.Timestamp.now ()
        }

        addDoc(collection(db, "ordenes"), orden)
            .then(() => {
                Swal.fire({  
                    icon: 'success',
                    type: 'success',  
                    title: 'Orden enviada!',  
                });  

                vaciar();
            });
    }

    const totalPrice = total (carrito)

    if(carrito.length>0){

        return (
            <div className="cart">
                <div className="cart__items">
                    {
                        carrito.map((item) => {
                            return (
                                <CartItem producto={item.producto} cantidad={item.cantidad} key={item.producto.id}/> 
                            )
                        })
                    }
                </div>
                <p>Total: {totalPrice}</p>
                <button onClick={vaciar} className="btn"> VACIAR CARRITO</button>
                <button onClick={terminarCompra} className="btn"> TERMINAR COMPRA</button>
            </div>
        )
    } else {
        return(
            <div className="cart">
                <p>CARRITO VACIO</p>
                <Link to={"/"}>
                    <button className="btn">VOLVER AL INICIO</button>
                </Link>
            </div>
        )
    }
}

export default Cart;
