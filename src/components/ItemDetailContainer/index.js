import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail"

import './itemdetailcontainer.css'

const ItemDetailContainer = ({ type }) => {

    const { id } = useParams()

    const productos = JSON.parse(localStorage.getItem('productos'))

    const productosFiltrados = productos.filter(producto => type === 'producto' ? producto.key === id : producto.category === id)

    return (

        <div className="item-detail-container">
            {
                productosFiltrados.map(producto => (
                    <div>
                        <ItemDetail producto={producto} initial={0} initialStock={producto.stock} more={false} />
                    </div>
                ))
            }
        </div>
    )
}

export default ItemDetailContainer