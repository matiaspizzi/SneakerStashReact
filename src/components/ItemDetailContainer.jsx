import ItemDetail from "./ItemDetail"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

function ItemDetailContainer () {

    const {id} = useParams();

    useEffect(() => {
        console.log("Id recivido:", id)
    }, [id])
    
    const [producto, setProducto] = useState([]);
    
    useEffect(() => {

        const getData = async() => {
            const datos = await getDocs(collection(db, "productos"));
            const data = datos.docs[id].data()
            setProducto(data);
        }
        getData();
    }, []);
    
    if(producto === undefined){
        return (
            <div className="itemDetailContainer">
                <p className="carga"> Loading </p>
            </div>
        );
    } else {
        return (
            <div className="itemDetailContainer">
                <ItemDetail producto={producto}/>
            </div>
        );
    }
}

export default ItemDetailContainer
