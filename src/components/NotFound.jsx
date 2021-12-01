import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Notfound = () => {
    return (
        <div>
            <p>Not Found</p>
            <p>La pagina que buscas no exite</p>
            <p> y una imagen podria aparecer</p>
            <Link to="/">
                Ir a territorio conocido
                <ArrowBackIcon color="secondary" />
            </Link>
        </div>
    );
}

export default Notfound;
