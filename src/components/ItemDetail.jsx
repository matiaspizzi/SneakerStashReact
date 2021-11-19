import Counter from "./Counter"
import { useContext } from "react"
import { context } from "../Contexts/CartContext"

function ItemDetail({producto}) {
    
    const { agregar } = useContext(context)

    const onAdd = (cantidad) => {
        agregar(producto, cantidad);
    }  
    
    return (
        <div className="section__grid">
                <div className="grid__imgSecundarias">
                    <img src={producto.img_dos} className="imgSecundarias__secundaria" alt={producto.nombre}/>
                    <img src={producto.img_tres} className="imgSecundarias__secundaria" alt={producto.nombre}/>
                    <img src={producto.img_cuatro} className="imgSecundarias__secundaria" alt={producto.nombre}/>
                </div>

                <img src={producto.img} className="grid__imgPrincipal" alt={producto.nombre}/>
                
                <div className="grid__datos">
                    <h3>{producto.nombre}</h3>

                    <p className="datos__precio">$ {producto.precio}</p>

                    <div className="datos__button">
                        <button type="button" id="btn__favoritos"><img src="../../../Multimedia/iconos/heart-solid.svg" id="img__heart" alt="icono favoritos"/></button>
                    </div>

                    <div className="datos__descripcion">
                        <p>{producto.descripcion}</p>
                    </div>
                    
                    <div className="datos__selects">
                        <label htmlFor="talle">Talle:</label>
                        <select name="talle" id="talle" className="form-select">
                            <option value="L">Large</option>
                            <option value="M">Medium</option>
                            <option value="S">Small</option>
                        </select>
                    
                        <Counter onAdd={onAdd} stock={producto.stock}/>

                    </div>

                    <div className="datos__inputs">
                        <button type="button" className="btn">Comprar</button>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail
