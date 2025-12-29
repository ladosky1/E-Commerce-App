import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useCart } from '../features/cart/useCart';
import { ROLES } from '../constants/roles';
import "../styles/navbar.css";


function NavBar({searchTerm, setSearchTerm}) {

    const { user, logout } = useAuth();
    const { cart } = useCart();

    return(
        <header className='navbar'>
            <div className='navbar__logo'>
                <Link to='/'>LadoskyShopify 🛍️</Link>
            </div>
        
            <input 
                type="text"
                placeholder='Search Products...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='navbar__search'/>
            
            <nav className='navbar__link'> 

                {user?.role === ROLES.ADMIN && 
                        (<Link to="/admin">Admin</Link>)}
                
                {!user ? 
                    (<Link to='/login'>Login</Link>):
                    (<button onClick={logout} className='navbar__logout'>
                        logout
                    </button>)}
                
                <Link to='/cart'>🛒{cart.length}</Link>
                <Link to='/wishlist'>❤️</Link>
            </nav>
        </header>
    )
}

export default NavBar