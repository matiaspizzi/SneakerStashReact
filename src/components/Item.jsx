import {Link} from "react-router-dom"

function Item({producto}) {

    return (
            <article className="grid__article" id={producto.id}>
                <Link to={`/producto/${producto.id}`}>
                    <img src={producto.img} className="article__imagen" alt={producto.nombre}/>
                </Link>
                <h2 className="article__nombre">{producto.nombre}</h2>
                <p className="article__precio">${producto.precio}</p>
                
            </article>
    );
}

export default Item;





    