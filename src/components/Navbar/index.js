import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import BasicMenu from './Menu'
import Logo from '../../assets/logo.svg'
import './navbar.css'
import { Container } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
    const [cartSize, setCartSize] = useState()
    const { cart } = useContext(CartContext)

    useEffect(() => {
        setCartSize(cart.length)
    }, [cart])

    return (
        <Container>
            <nav className='navbar'>
                <div>
                    <BasicMenu />
                </div>
                <div>
                    <Link to={'/'} >
                        <img src={Logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <div>
                    <Link to='/cart'>
                        <CartWidget cantidad={cartSize} />
                    </Link>
                </div>
            </nav>
        </Container>
    )
}


export default Navbar