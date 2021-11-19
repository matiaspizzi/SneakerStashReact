function Aside() {

    const filtros =  () => {

         
    }
    

    
    return (
        <aside className="aside">
            <ul className="aside__lista">
                <li className="aside__item">
                    <button type="button" onClick={filtros()} className="aplicar btn"><p>Aplicar Filtros</p></button>
                </li>
                <ul className="aside__item">
                    <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="aside__checkUno"/>
                        <label className="form-check-label" for="aside__checkUno">
                        Popular
                        </label>
                    </li>
                    <li className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="aside__checkDos"/>
                        <label className="form-check-label" for="aside__checkDos">
                        Nuevo
                        </label>
                    </li>
                </ul>
                <li className="aside__item">
                    <p>Ordenar por:</p>
                    <select id="asideOrden" className="form-select">
                        <option value="2">--</option>
                        <option value="3">Menor Precio</option>
                        <option value="4">Mayor Precio</option>
                    </select>
                </li>
                <li className="aside__item">
                    <p>Género:</p>
                    <select id="asideGenero" className="form-select">
                        <option value="0">Todos</option>
                        <option value="1">Mujer</option>
                        <option value="2">Hombre</option>
                    </select>
                </li>
                <li className="aside__item">
                    <p>Talle (US):</p>
                    <select id="asideTalle"  className="form-select">
                        <option value="7">7</option>
                        <option value="7.5">7.5</option>
                        <option value="8">8</option>
                        <option value="8.5">8.5</option>
                        <option value="9">9</option>
                        <option value="9.5">9.5</option>
                        <option value="10">10</option>
                        <option value="10.5">10.5</option>
                        <option value="11">11</option>
                        <option value="11.5">11.5</option>
                        <option value="12">12</option>
                        <option value="12.5">12.5</option>
                        <option value="13">13</option>
                        <option value="13.5">13.5</option>
                        <option value="14">14</option>
                        <option value="14.5">14.5</option>
                        <option value="...">...</option>
                    </select>
                </li>
            </ul>
        </aside>
    );
}

export default Aside
