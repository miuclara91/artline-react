import { Container, Grid, List } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CardUsers from '../components/CardsUsers.jsx';
import PostVacio from '../components/PostVacio';

function DiscoverPage(props) {
    const { user, isLogged, token } = props;
    const URLBase = 'https://artline-team10.herokuapp.com/artline/usuarios';
    const [users, setUsers] = useState([]);
    const [amigos, setAmigos] = useState([]);

    useEffect(() => {
        if (isLogged) {
            obtenerDatos();
        }
    }, [token, amigos]);


    const obtenerDatos = async () => {
        const opciones = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };
        // busca todos los usuarios
        const data = await fetch(`${URLBase}/todosUsuarios`, opciones);
        const users = await data.json();
        setUsers(users);
        // Busca amigos
        const datAmigos = await fetch(`${URLBase}/${user[0].id}`, opciones);
        const amigos = await datAmigos.json();
        setAmigos(amigos.amigos);
    };

    const renderUsers = (
        <Container>
            <List style={{ margin: 50 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        users.map((item,index) => (
                            // <>
                                <Grid key={index} item xs={2} sm={4} md={4}>
                                    <CardUsers key={item._id} data={item} token={token} amigos={amigos} setAmigos={setAmigos} user={user} />
                                </Grid>
                            // </>
                        ))
                    }
                </Grid>
            </List>
        </Container>
    );
    return (
        <Container className="fondoPosts">
            {
                users.length > 0 ? renderUsers : <PostVacio />
            }
        </Container>
    );
}

export default DiscoverPage;