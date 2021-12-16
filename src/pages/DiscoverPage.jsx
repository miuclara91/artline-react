import { Container, Grid, List } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CardUsers from '../components/CardsUsers.jsx';
import { useLocalStorage } from "../helpers/useLocalStorage";
import PostVacio from '../components/PostVacio';

function DiscoverPage(props) {
    // const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
    const { user, isLogged, token } = props;
    // const [user, setUser] = useLocalStorage("user", "");
    const URLBase = 'https://artline-team10.herokuapp.com/artline/usuarios';
    const [users, setUsers] = useState([]);

    // console.log("--::::", user);
    useEffect(() => {
        if (isLogged) {
            obtenerDatos();
        }
    }, [token]);


    const obtenerDatos = async () => {
        const opciones = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };
        console.log(opciones);
        //if (!isLogged) {
        const data = await fetch(`${URLBase}/todosUsuarios`, opciones);
        const user = await data.json();
        console.log("user----->", user);
        delete user.fotoPerfil;
        console.log("user----->", user);
        setUsers(user);


        //}
    };

    const renderUsers = (
        <Container>
            <List style={{ margin: 50 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        users.map((item) => (
                            <>
                                <Grid item xs={2} sm={4} md={4}>
                                    <CardUsers key={item._id} data={item} />
                                </Grid>
                            </>
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