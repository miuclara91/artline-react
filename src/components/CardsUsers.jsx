import { Container, List } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useLocalStorage } from "../helpers/useLocalStorage";

const CardsUsers = (props) => {
    const { data } = props;
    const [user, setUser] = useLocalStorage("user", "");
    const [token, setToken] = useState(user.token);
    const URLBase = 'https://artline-team10.herokuapp.com/artline/usuarios';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const opciones = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };
        //if (!isLogged) {
        const data = await fetch(`${URLBase}/topUsuarios`, opciones);
        const user = await data.json();
        console.log(user);
        setUsers(user[0]);
        console.log(users);

        //}
    };

    return (
        <div>
            <Container>
                <List style={{ margin: 50 }}>
                    {
                        users !== undefined ?
                            users.map((item) => (
                                <Card sx={{ maxWidth: 345 }} key={item._id}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="https://res.cloudinary.com/artline/image/upload/v1639446667/artline/fwcb0udt52hserqmb5t0.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.nombre}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Añadir amigo</Button>
                                    </CardActions>
                                </Card>
                            ))
                            :
                            <div>No hay sugerencias en este momento</div>
                    }
                </List>
            </Container>

        </div>
    );
}

export default CardsUsers;
