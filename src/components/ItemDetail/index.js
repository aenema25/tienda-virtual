import { useState } from "react"
import './itemdetail.css'

const ItemDetail = ({ producto, initialStock, initial }) => {
    const [cantidad, setCantidad] = useState(initial)
    const [empty, setEmpty] = useState(false)
    const [stock, setStock] = useState(initialStock)

    const addUp = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
            setEmpty(false)
        } else {
            setEmpty(true)
        }
    }
    const restDown = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
        setEmpty(false)
    }

    const updateStock = () => {
        setStock(stock - cantidad)
        setCantidad(initial)
    }

    return (
        <div className="productoCard">
            <div className="productoCardTitle">
                {producto.name}
            </div>
            <div className="productoImage">
                <img src={`http://localhost:3000/imagenes/${producto.imgKey}`} />
            </div>
            <div className="productoDescription">
                {producto.description}
            </div>
            <div className="productoStock">
                <button className="stockButtonLeft" onClick={restDown}>-</button>
                <div className="cantidad">
                    {cantidad}
                </div>
                <button className="stockButtonRight" onClick={addUp}>+</button>
            </div>
            <div className="emptyStockMessage">
                {empty && 'Se alcanzo la maxima cantidad de items para este producto'}
            </div>
            <button className="cartAddButton" onClick={updateStock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail