import { useEffect, useState } from 'react'
import ItemCount from '../ItemCount'
import './itemlistcontainer.css'

const ItemListContainer = ({ greetings }) => {
    const [productos, setProductos] = useState()

    const fetchProductos = async () => {
        const req = await fetch('http://localhost:3000/productos.json')
        const result = await req.json()
        if (result) {
            setProductos(result)
        }
    }

    useEffect(() => {
        fetchProductos()
    }, [])
    return (
        <div className='container'>
            {greetings}
            <div className='productosContainer'>
                {
                    productos && productos.map(producto => (
                        <ItemCount producto={producto} initialStock={producto.stock} initial={0} />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemListContainer