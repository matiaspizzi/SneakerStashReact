import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const isInCart = (producto) => {
        const indice = carrito.indexOf(
            carrito.find((elemento) => elemento.producto.id === producto.id)
        );
        return indice;
    };

    const agregar = (producto, cantidad) => {
        const verif = isInCart(producto);
        if (verif === -1) {
            setCarrito([...carrito, { producto: producto, cantidad: cantidad }]);
        } else {
            carrito[verif].cantidad += cantidad;
        }
        Swal.fire({
            showConfirmButton: false,
            toast: true,
            position: "top-end",
            timer: 2500,
            timerProgressBar: true,
            icon: "success",
            color: "white",
            iconColor: "white",
            background: '#74f293',
            title: "Producto añadido!",
            width: "18rem"

        });
    };

    const quitar = (producto) => {
        const verif = isInCart(producto);
        const copia = [...carrito];
        copia.splice(verif, 1);
        setCarrito(copia);
        Swal.fire({
            showConfirmButton: false,
            toast: true,
            position: "top-end",
            timer: 2500,
            color: "white",
            timerProgressBar: true,
            icon: "error",
            iconColor: "white",
            background: "#fd5858",
            title: "Producto retirado!",
            width: "18rem"
        });
    };

    const vaciar = () => {
        setCarrito([]);
    };

    const total = () => {
        const totalPrice = carrito.reduce(
            (total, a) => total + a.producto.precio * a.cantidad, 0
        );
        return totalPrice;
    };

    const contextValue = {
        carrito: carrito,
        agregar: agregar,
        quitar: quitar,
        vaciar: vaciar,
        total: total,
    };

    return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
