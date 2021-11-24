import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import {BsShop} from 'react-icons/bs'


export const NavBar = () => {

    
    return (
    
    <header className="container-fluid">
        <Link to="/"><BsShop className="iconoHeader"/></Link>

        <nav>
            <ul>
                <li><Link to="productos/notebook" className="links-nav">Notebook</Link></li>
                <li><Link to="productos/auricular" className="links-nav">Auriculares</Link></li>
                <li><Link to="productos/accesorio" className="links-nav">Accesorios</Link></li>
            </ul>
        </nav>
        
        <Link to="cart"><CartWidget/></Link>
        
    </header>
    )
}