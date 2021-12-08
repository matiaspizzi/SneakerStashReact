import { context } from "../Contexts/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ producto, cantidad }) => {
  const { quitar } = useContext(context);

  const remove = () => {
    quitar(producto);
  };

  return (
    <div className="cart__article" id={producto.id}>
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.img} className="cart__image" alt="" />
      </Link>
      <p className="article__text"> {producto.nombre} </p>
      <p>Precio: ${producto.precio}</p> <p>Cantidad: {cantidad}</p>
      <p>Subtotal: ${producto.precio * cantidad}  </p>
      <button onClick={remove} className="btn">Quitar</button>
    </div>
  );
};

export default CartItem;
