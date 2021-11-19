import { createContext, useState } from "react";

export const context = createContext();

const { Provider } = context;




const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);



    const isInCart = (producto) => {

        const found = carrito.find(elemento => elemento.producto === producto)
        if (found === undefined){
            return false;
        } else {
            return found;
        }
    }


    const agregar = (producto, cantidad) => {

        const verif = isInCart (producto);
        if (verif === false){
            setCarrito([...carrito, {producto : producto, cantidad : cantidad}]);
        } else {
            const copia = [...carrito];
            const found = copia.indexOf(verif);
            copia[found].cantidad += cantidad; 
            setCarrito(copia)
        }
    }


    const quitar = (producto) => {

        const verif = isInCart (producto);
        const copia = [...carrito];
        const found = copia.indexOf(verif);
        copia.splice(found, 1); 
        setCarrito(copia)
        console.log(carrito)
    }

    const vaciar = () => {
        setCarrito([]);
    }

    const contextValue = {
        carrito : carrito,
        agregar : agregar,
        quitar : quitar,
        vaciar : vaciar
    }


    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    );
}

export default CustomProvider;