import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className='Navbar__img' >
                <img src="/Logo_Mercado_Libre.png" alt="Logo mercado libre" />
            </div>
            
            <Link 
                className="navbar-brand" 
                to="/home"
            >
               
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/products"
                    >
                    </NavLink>

                </div>
            </div>

           
        </nav>
    )
}