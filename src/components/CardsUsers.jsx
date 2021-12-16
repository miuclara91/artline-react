import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useLocalStorage } from "../helpers/useLocalStorage";


const CardsUsers = (props) => {
    const { data } = props;
    // const [user, setUser] = useLocalStorage("user", "");
    // const [token, setToken] = useState(user.token);
    // const URLBase = 'https://artline-team10.herokuapp.com/artline/usuarios';
    // const [users, setUsers] = useState([]);
    /*
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
    */

    return (
        <>
            <Card sx={{ maxWidth: 475 }} key={data.id} >
                <CardMedia
                    component="img"
                    alt="Sin Foto de Perfil"
                    height="140"
                    image={data.fotoPerfil.imageURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" alignContent="flex-end">
                        {data.email}
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        data.amigos.length === 0 ?
                            <Button size="small" color="secondary">Son amigos</Button>
                            : <Button size="small">Añadir amigo</Button>
                    }

                </CardActions>
            </Card>
        </>

    );
}

export default CardsUsers;
