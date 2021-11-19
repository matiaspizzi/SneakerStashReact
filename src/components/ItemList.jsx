import Item from "./Item"

function ItemList (props) {

    return (
        <div className = "itemList">
            {props.productos.map((producto) => {
    
                return (
                    
                    <Item producto={producto} key={producto.id}/>
                )
            })}
        </div>
    )   
}

export default ItemList;


