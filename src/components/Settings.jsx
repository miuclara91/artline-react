import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FormPerfil from './Perfil';
import Post from './Post';

const Settings = () => {
    let userId = '';
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
            <h1>Mi perfil de Usuario</h1>
            {
                usuario.map((item) => (
                    < FormPerfil
                        key={item.id}
                        data={item}
                    />
                ))
            }
            <Container>
                <h1>Post</h1>
                {
                    usuario.map((item) => (
                        <Post
                            key={item.id}
                            userId={item.id} />
                    ))
                }

            </Container>
        </Container>
    );
}

export default Settings;
