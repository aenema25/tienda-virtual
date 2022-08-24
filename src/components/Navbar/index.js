import CartWidget from '../CartWidget'
import './navbar.css'

const Navbar = () => (
    <nav className='navbar'>
        <div>
            Tienda Virtual
        </div>
        <ul className='navigation'>
            <li>
                <a href='#'>
                    Inicio
                </a>
            </li>
            <li>
                <a href='#'>
                    Contacto
                </a>
            </li>
            <li>
                <CartWidget cantidad={8} />
            </li>
        </ul>
    </nav>
)


export default Navbar