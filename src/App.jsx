import {BrowserRouter,Route,Routes} from "react-router-dom";
import {useParams} from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import CustomProvider from "./Contexts/CartContext";

const resultado = useParams;
console.log(resultado);


const App = () => {
    return(

            <BrowserRouter>
                <CustomProvider>
                    <Header/>
                    <Nav/>
                    <Routes>
                        <Route path="/" exact element={<ItemListContainer className="ItemListContainer"/>}/>
                        <Route path="/cart" exact element={<Cart/>}/>
                        <Route path="/producto/:id" exact element={<ItemDetailContainer className="ItemDetailContainer"/>}/>
                        <Route path="/categoria/:id/" exact element={<ItemListContainer className="ItemListContainer"/>}/>
                    </Routes>
                    <Footer/>
                </CustomProvider>
            </BrowserRouter>

    );
}

export default App;