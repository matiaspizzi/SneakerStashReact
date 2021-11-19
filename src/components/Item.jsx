import {Link} from "react-router-dom"

function Item({producto}) {

    return (
        <>  
            <article className="grid__article" id={producto.id}>
                <Link to={`/producto/${producto.id}`}>
                    <img src={producto.img} className="article__imagen" alt={producto.nombre}/>
                </Link>
                <h2 className="article__nombre">{producto.nombre}</h2>
                <p className="article__precio">${producto.precio}</p>
                <div className="article__buttons">
                    <button type="button" className="btn"><img src="Multimedia/iconos/cart-plus-solid.svg" className="button__cart" alt="icono carrito"/> </button>
                    <button type="button" className="btn"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="button__heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" id="" className={"heart__svg" + producto.id} d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></button>
                </div>
            </article>
        </>
    );
}

export default Item;





    