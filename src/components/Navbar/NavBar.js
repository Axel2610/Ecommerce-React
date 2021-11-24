import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import {BsShop} from 'react-icons/bs'


export const NavBar = () => {

    
    return (
    
    <header>
        <Link to="/"><BsShop className="iconoHeader"/></Link>

        <nav>
            <ul>
                <li><Link to="productos/notebook">Notebook</Link></li>
                <li><Link to="productos/auricular">Auriculares</Link></li>
                <li><Link to="productos/accesorio">Accesorios</Link></li>
            </ul>
        </nav>
        
        <Link to="cart"><CartWidget/></Link>
        
    </header>
    )
}