import './itemlistcontainer.css'

const ItemListContainer = ({greetings}) =>{
    return (
        <div className='container'>
            {greetings}
        </div>
    )
}

export default ItemListContainer