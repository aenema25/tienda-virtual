import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import BasicMenu from './Menu'
import Logo from '../../assets/logo.svg'
import './navbar.css'
import { Container } from '@mui/material'

const Navbar = () => (
    <Container>
        <nav className='navbar'>
            <div>
                <BasicMenu />
            </div>
            <div>
                <Link to={'/'} >
                    <img src={Logo} className="logo"/>
                </Link>
            </div>
            <div>
                <Link to='/cart'>
                    <CartWidget cantidad={8} />
                </Link>
            </div>
        </nav>
    </Container>
)


export default Navbar