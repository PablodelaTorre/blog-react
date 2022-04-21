import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext  } from "react";

const Navbar = () => {

    const {user} = useContext(UserContext)

    return (
        <nav className="navbar">
            <Link className="linkNav" to="/">{user? 'Juanito' : 'Sin Conexión'}</Link>
            <NavLink className="linkNav" to="/">Inicio</NavLink>
            <NavLink className="linkNav" to="/blog">Blog</NavLink>
            <NavLink className="linkNav" to="/contacto">Contacto</NavLink>
        </nav>
    );
};

export default Navbar;