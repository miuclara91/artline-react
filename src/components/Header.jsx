import React, { Link } from 'react';

const Header = () => {
    return (
        <nav>
            {/* <Link to="/perfil" className="link">Página 1</Link> */}
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="./Perfil">Perfil</a></li>
                <li><a href="">Cerrar sesion</a></li>
            </ul>
        </nav>
    );
}

export default Header;
