import { Link } from "react-router-dom"

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__centro">
                <ul className="centro__lista">
                    <li><strong>Sneaker Stash</strong> </li>
                    <li><span>2021</span></li>
                    <li><small>Todos los derechos reservados</small></li>
                </ul>
            </div>
            <div className="footer__derecha">
                <ul className="derecha__lista">
                    <li className="lista__item">
                        <Link to="">
                            <label htmlFor="iconContacto1"><img id="iconContacto1" className="iconContacto" src="Multimedia/iconos/envelope-regular.svg" alt="" /> Contacto </label>
                        </Link>
                    </li>
                    <li className="lista__item">
                        <Link to="">
                            <label htmlFor="iconContacto2"><img id="iconContacto2" className="iconContacto" src="Multimedia/iconos/phone-alt-solid.svg" alt="" /> 0000-0000 </label>
                        </Link>
                    </li>
                    <li className="lista__item">
                        <Link to="">
                            <label htmlFor="iconContacto3"><img id="iconContacto3" className="iconContacto" src="Multimedia/iconos/whatsapp-brands.svg" alt="" /> 11 0000-0000 </label>
                        </Link>
                    </li>
                    <li className="lista__item">
                        <Link to="">
                            <label htmlFor="iconContacto4"><img id="iconContacto4" className="iconContacto" src="Multimedia/iconos/envelope-regular.svg" alt="" /> Email: info@sneakerstash.com.ar </label>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer
