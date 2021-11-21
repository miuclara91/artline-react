import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardPerfil from '../components/CardPerfil';

const PerfilPage = (props) => {
    // const { usuarioFake } = props;
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        // falla por cors
        // const data = await fetch('https://artline-team10.herokuapp.com/artline/publicaciones', { mode: 'cors' });

        const data = await fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=1');
        const users = await data.json();
        setUsuario(users);
    }

    return (
        <Container>
            {
                usuario.map((item) => (
                    < CardPerfil
                        key={item.id}
                    /*data={item}*/
                    />
                ))
            }
            {/* <CardPerfil key={usuarioFake} data={usuarioFake} /> */}
        </Container>
    );
}

export default PerfilPage;
