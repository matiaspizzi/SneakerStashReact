import { context } from "../Contexts/CartContext";
import { useContext } from "react";

const CartItem = ({ producto, cantidad }) => {
  const { quitar } = useContext(context);

  const remove = () => {
    quitar(producto);
  };

  return (
    <div className="cart__article" id={producto.id}>
      <img src={producto.img} width={250} alt="" />
      <p className="article__text"> {producto.nombre} </p>
      <p>Precio: ${producto.precio}</p> <p>Cantidad: {cantidad}</p>
      <p>Subtotal:</p> <p className="article__price">  ${producto.precio * cantidad}  </p>
      <button onClick={remove} className="btn">
        Quitar
      </button>
    </div>
  );
};

export default CartItem;
