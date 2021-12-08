import { useContext } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { context } from "../Contexts/CartContext";
import CartItem from "./CartItem";
import Swal from "sweetalert2";

function Cart() {
    const { carrito } = useContext(context);
    const { vaciar } = useContext(context);
    const { total } = useContext(context);

    const terminarCompra = () => {
        const usuario = {
            nombre: "matias",
            email: "matias@email.com",
            telefono: "1234345"
        }
        const orden = {
            buyer: usuario,
            items: carrito,
            total: total(),
            date: serverTimestamp()
        }
        addDoc(collection(db, "ordenes"), orden)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Orden enviada!',
                });
                vaciar();
            });
    }

    if (carrito.length > 0) {
        return (
            <div className="cart">
                <button onClick={vaciar} className="btn vaciar"> <p>VACIAR CARRITO</p> </button>
                <div className="cart__items">
                    {
                        carrito.map((item) => {
                            return (
                                <CartItem producto={item.producto} cantidad={item.cantidad} key={item.producto.id} />
                            );
                        })
                    }
                </div>
                <p className="total">Total: ${total()}</p>
                <button onClick={terminarCompra} className="btn confirm"> <p>TERMINAR COMPRA</p> </button>
            </div>
        );
    } else {
        return (
            <div className="cart">
                <p>CARRITO VACIO</p>
                <Link to={"/"}>
                    <button className="btn">VOLVER AL INICIO</button>
                </Link>
            </div>
        );
    }
}

export default Cart;
