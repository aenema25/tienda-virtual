import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail'
import './itemlistcontainer.css'

const ItemListContainer = ({ greetings, productos }) => {

    return (
        <div className='container'>
            {greetings}
            <div className='productosContainer'>
                {
                    productos && productos.map(producto => (
                        <ItemDetail producto={producto} initialStock={producto.stock} initial={0} more={true} />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemListContainer