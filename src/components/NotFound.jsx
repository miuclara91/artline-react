import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            Not Found
            <Link to="/">Inicio</Link>
        </div>
    );
}

export default Notfound;
