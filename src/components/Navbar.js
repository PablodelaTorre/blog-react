import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className="linkNav" to="/">
                Inicio
            </NavLink>
            <NavLink className="linkNav" to="/blog">
                Blog
            </NavLink>
            <NavLink className="linkNav" to="/contacto">
                Contacto
            </NavLink>
        </nav>
    );
};

export default Navbar;