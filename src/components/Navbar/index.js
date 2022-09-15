import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import './navbar.css'

const Navbar = () => (
    <nav className='navbar'>
        <div>
            <Link to={'/'} className="logo">
                Tienda Virtual
            </Link>
        </div>
        <ul className='navigation'>
            <li>
                <Link to={'/'}>
                    Inicio
                </Link>
            </li>
            <li>
                <Link to='/category/hombre'>Hombre</Link>
            </li>
            <li>
                <Link to='/category/mujer'>Mujer</Link>
            </li>
            <li>
                <Link to='/category/nino'>Niños</Link>
            </li>
            <li>
                <a href='#'>
                    Contacto
                </a>
            </li>
            <li>
                <Link to='/cart'>
                    <CartWidget cantidad={8} />
                </Link>
            </li>
        </ul>
    </nav>
)


export default Navbar