import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import db from "./firebase";

function ItemDetailContainer() {
    const { id } = useParams();

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "productos", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setProducto(data);
            } else {
                console.log("Elemento no encontrado");
            }
        };
        getData();
    }, [id]);

    if (producto === undefined) {
        return (
            <div className="itemDetailContainer">
                <p className="carga"> Loading </p>
            </div>
        );
    } else {
        return (
            <div className="itemDetailContainer">
                <ItemDetail producto={producto} />
            </div>
        );
    }
}

export default ItemDetailContainer;
