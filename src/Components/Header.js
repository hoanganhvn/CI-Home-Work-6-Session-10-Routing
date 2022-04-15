import HomeWork from './HomeWork';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const activeClass = (params) => {
        return params.isActive ? "active-item" : "navbar-brand"
    }

    return (
        <div>
            <HomeWork />
            <div className="container" >
                <div className="row">
                    <div className="col-sm-9">
                        <nav className="navbar navbar-light bg-primary">
                            <div className="container-fluid">
                                <NavLink className={activeClass} to="/">Home</NavLink>
                                <NavLink className={activeClass} to="/products">Products</NavLink>
                                <NavLink className={activeClass} to="/invoices">Invoices</NavLink>
                                <NavLink className={activeClass} to="/cart">Cart</NavLink>
                                <NavLink className={activeClass} to="/profile">Profile</NavLink>
                                <NavLink className={activeClass} to="/about">About</NavLink>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-3">
                        <nav className="navbar navbar-light bg-danger">
                            <div className="container-fluid">
                                {/* <NavLink className={activeClass} to="/auth">Auth</NavLink> */}
                                <NavLink className={activeClass} to="auth/login">Login</NavLink>
                                <NavLink className={activeClass} to="auth/register">Register</NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;