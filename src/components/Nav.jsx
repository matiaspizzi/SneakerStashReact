import CartWidget from "./CartWidget"
import { useState } from "react"
import {Link} from "react-router-dom"


const Nav = () => {

const [busqueda, setBusqueda] = useState("");

const handleChangeBuscador = (e) =>{
    setBusqueda(e.target.value);
    console.log(busqueda)
}


    return(
        <nav>
            <ul className="nav__lista">
                <li className="nav__item">
                    <Link to={"/"}>
                        <img src="Multimedia/iconos/home-solid.svg" className="nav__icono" alt="icono inicio"></img>
                    </Link>
                </li>
                <li className="nav__item">
                    <input type="text" id="buscadorIndex" onChange={handleChangeBuscador} name="Buscador" placeholder="Buscar" className="nav__buscador"></input>
                </li>
                <li className="nav__item">
                    <Link to={`/categoria/hombre`}>
                        <button className="btn btn-nav"><p>Hombre</p></button>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to={`/categoria/mujer`}>
                        <button className="btn btn-nav"><p>Mujer</p></button>
                    </Link>    
                </li>

                <CartWidget/>
                
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