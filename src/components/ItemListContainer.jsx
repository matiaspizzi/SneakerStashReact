import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import Aside from "./Aside";
import ItemList from "./ItemList";

function ItemListContainer() {
    const { id } = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const collect = collection(db, "productos");

        const getData = async (data) => {
            const result = await getDocs(data);
            setProductos(result.docs.map((e) => ({ ...e.data(), id: e.id })));
        }

        if(id !== undefined){
            const a = query(collect, where("genero","==",id));
            getData(a);
        } else {
            getData(collect);
        }

    }, [id]);

    const menor = () => {
        const copia = [...productos];
        copia.sort((a, b) => {

            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            return 0;
        })
        setProductos(copia);
    }

    const mayor = () => {
        const copia = [...productos];
        copia.sort((a, b) => {

            if (a.precio > b.precio) {
                return -1;
            }
            if (a.precio < b.precio) {
                return 1;
            }
            return 0;
        })
        setProductos(copia);
    }


    if (productos.length === 0) {
        return (
            <div className="itemListContainer">
                <p className="carga"> Loading </p>
            </div>
        );
    } else {
        return (
            <div className="itemListContainer">
                <Aside mayor={mayor} menor={menor}/>
                <div className="itemList">
                    <ItemList productos={productos} />
                </div>
            </div>
        );
    }
}

export default ItemListContainer;
