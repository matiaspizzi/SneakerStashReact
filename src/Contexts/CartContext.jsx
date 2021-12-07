import { createContext, useState } from "react";
import Swal from "sweetalert2";

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

        Swal.fire({  
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            timer: 2500,
            timerProgressBar: true,
            icon: 'success',
            type: 'success',  
            title: 'Producto añadido!',  
        });  

        const a = total(carrito)
        console.log(a)
    }

    const total = (e) => {

        const totalPrice = e.reduce((total, a) => total + (a.producto.precio * a.cantidad), 0);
        return totalPrice;
    }

    const quitar = (producto) => {

        const indice = isInCart(producto);
        const copia = [...carrito];
        copia.splice(indice, 1);
        setCarrito(copia);

        Swal.fire({  
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            timer: 2500,
            timerProgressBar: true,
            icon: 'error',
            type: 'error',  
            title: 'Producto retirado!',  
        });  
    }

    const vaciar = () => {
        setCarrito([]);
    }

    const contextValue = {
        carrito: carrito,
        agregar: agregar,
        quitar: quitar,
        vaciar: vaciar,
        total: total
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    );
}

export default CustomProvider;