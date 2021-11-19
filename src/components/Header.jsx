import {Link} from "react-router-dom"


const Header = () => {

    return(
        <header>
            <div className="header__logo">
                <Link to="index.html"><img src="Multimedia/logo.png" className="logo__img" alt="logo sneaker stash"></img></Link>
            </div>
            <div className="header__social">
                <div className="social__container">
                    <Link to=""><img src="Multimedia/iconos/whatsapp-brands.svg" className="container__icono" alt=""></img></Link>
                    <Link to=""><img src="Multimedia/iconos/facebook-square-brands.svg" className="container__icono" alt=""></img></Link>
                    <Link to=""><img src="Multimedia/iconos/instagram-brands.svg" className="container__icono" alt=""></img></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;