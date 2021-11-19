import {useState, useEffect} from "react";
//  import {useParams} from "react-router-dom";
import productos_iniciales from "../productos.json"
import ItemList from "./ItemList"



function ItemListContainer () {

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
            <div className="itemListContainer">

                <ItemList productos={productos}/>

            </div>
        );
    }
}

export default ItemListContainer;
