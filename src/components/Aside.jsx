
function Aside({ mayor, menor }) {


    return (
        <aside className="aside">
            <ul className="aside__lista">
                <li className="aside__item">
                    <p>Ordenar por:</p>
                    <div className="botones-filtro">
                        <button className="btn" onClick={menor}>Menor Precio</button>      
                        <button className="btn" onClick={mayor}>Mayor Precio</button>        
                    </div>
                </li>
            </ul>
        </aside>
    );
}

export default Aside
