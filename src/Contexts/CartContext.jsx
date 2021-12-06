import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;


const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);




    const isInCart = (producto) => {
        const found = carrito.find(elemento => elemento.producto.id === producto.id);
        const indice = carrito.indexOf(found)
        return indice;
    }


    const agregar = (producto, cantidad) => {
        
        const verif = isInCart(producto);
        if(verif === -1){
            setCarrito([...carrito, { producto: producto, cantidad: cantidad}]);
            // SI EL OBJETO NO EXISTE LO SETEA
        } if(verif !== -1) {
            carrito[verif].cantidad += cantidad;
        }
    }

    const quitar = (producto) => {

        const indice = isInCart(producto);
        const copia = [...carrito];
        copia.splice(indice, 1);
        setCarrito(copia);
    }

    const vaciar = () => {
        setCarrito([]);
    }

    const contextValue = {
        carrito: carrito,
        agregar: agregar,
        quitar: quitar,
        vaciar: vaciar
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    );
}

export default CustomProvider;