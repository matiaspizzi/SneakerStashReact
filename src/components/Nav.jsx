import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"


const Nav = () => {

    return(
        <nav>
            <ul className="nav__lista">
                <li className="nav__item">
                    <Link to={"/"}>
                        <img src="Multimedia/iconos/home-solid.svg" className="nav__icono" alt="icono inicio"></img>
                    </Link>
                </li>
                <li className="nav__item">
                    <input type="text" id="buscadorIndex" name="Buscador" placeholder="Buscar" className="nav__buscador"></input>
                </li>
                <li className="nav__item">
                    <a href="pages/marcas.html"><p>Marcas</p></a>
                </li>
                
                <CartWidget/>

                <li className="nav__item">
                    <a href="pages/favoritos.html">
                        <img src="Multimedia/iconos/heart-solid.svg" className="nav__icono" alt="icono favoritos"></img>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="pages/login.html">
                        <img src="Multimedia/iconos/user-solid.svg" className="nav__icono" alt="icono usuario"></img> 
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;