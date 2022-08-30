import ItemCount from '../ItemCount'
import './itemlistcontainer.css'

const productos = [
    {
        name: 'Zapatilla roja',
        stock: 20
    },
    {
        name: 'Zapatilla negra',
        stock: 15
    },
    {
        name: 'Cortaviento morado',
        stock: 9
    },
    {
        name: 'Parka verde',
        stock: 5
    }
]

const ItemListContainer = ({ greetings }) => {
    return (
        <div className='container'>
            {greetings}
            <div className='productosContainer'>
                {
                    productos.map(producto => (
                        <ItemCount producto={producto} initialStock={producto.stock} initial={0} />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemListContainer