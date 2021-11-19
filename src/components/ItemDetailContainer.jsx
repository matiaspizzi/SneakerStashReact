import ItemDetail from "./ItemDetail"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import productos_iniciales from "../productos.json"


function ItemDetailContainer () {

    const {id} = useParams();

    useEffect(() => {
        console.log("Id recivido:", id)
    }, [id])
    
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            setProductos(productos_iniciales);
        }, 0);
        // CAMBIAR A 2000
    }, []);
    
    if(productos.length === 0){
        return (
            <div className="itemListContainer">
                <p className="carga"> Loading </p>
            </div>
        );
    } else {
        return (
            <div className="itemDetailContainer">
                <ItemDetail producto={productos[id-1]}/>
            </div>
        );
    }
}

export default ItemDetailContainer
