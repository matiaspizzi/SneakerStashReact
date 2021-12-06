import { context } from "../Contexts/CartContext";
import { useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"
import Swal from "sweetalert2";


function Cart() {
    
    const {carrito} = useContext(context);
    const {vaciar} = useContext(context);
    
    const terminarCompra = () => {

        const usuario = {
            nombre : "matias",
            email : "matias@email.com",
            telefono : "1234345"
        }

        const orden = {
            buyer : usuario,
            items : carrito,
            total : 1000
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
                <button onClick={terminarCompra}> TERMINAR COMPRA</button>
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
