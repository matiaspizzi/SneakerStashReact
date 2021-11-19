import {useState, useEffect } from "react";
import { useParams } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";
import ItemList from "./ItemList";



function ItemListContainer () {

    const {id} = useParams();
    console.log("categoria:", id);

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const getData = async() => {
            const datos = await getDocs(collection(db, "productos"));
            const storage = [];
            datos.forEach((e) => {
                storage.push(e.data())
            });
            setProductos(storage);
        }
        getData();
    }, []);

    if(productos.length === 0){
        return (
            <div className="itemListContainer">
                <p className="carga"> Loading </p>
            </div>
        );
    } 
    
    else {
        return (
            <div className="itemListContainer">

                <ItemList productos={productos}/>

            </div>
        );
    }
}

export default ItemListContainer;
