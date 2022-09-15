import { useState } from "react"
import { Link } from "react-router-dom"
import './itemdetail.css'

const ItemDetail = ({ producto, initialStock, initial, more }) => {
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
                <span>{producto.name}</span>
                {
                    more ? <Link to={`/item/${producto.key}`}>Ver mas</Link> : <Link to={'/'}>Volver</Link>
                }
            </div>
            <div className="productoImage">
                <img src={`http://localhost:3000/imagenes/${producto.imgKey}`} />
            </div>
            <div className="productoDescription">
                {producto.description}
            </div>
            <div className="productoStockDisponible">
                Stock disponible: {stock}
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
            <div className="buttonsContainer">
                <button className="cartAddButton" onClick={updateStock}>Agregar al carrito</button>
                <button className="cartEndButton"><Link to="/cart" >Terminar Compra</Link></button>

            </div>


        </div>
    )
}

export default ItemDetail