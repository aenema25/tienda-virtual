import CartIcon from '../../assets/carticon.svg'
import './cartwidget.css'

const CartWidget = ({ cantidad }) => {
    return (
        <div className='cartContainer'>
            <img className='cartIcon' src={CartIcon} alt="carro" />
            <div className='cartCantidad'>
                {cantidad}
            </div>
        </div>
    )
}

export default CartWidget