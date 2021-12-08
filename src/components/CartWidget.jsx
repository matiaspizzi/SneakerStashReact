import { useContext } from "react";
import { context } from "../Contexts/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { carrito } = useContext(context);

    return (
        <li className={`${carrito.length > 0 ? 'nav__item' : 'dismount'}`} id="cart__widget">
            <Link to={"/cart"}>
                <img src="Multimedia/iconos/shopping-cart-solid.svg" className="nav__icono" alt="icono carrito"></img>
            </Link>
            <p>{carrito.length}</p>
        </li>
    );
}

export default CartWidget;