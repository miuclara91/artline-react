import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


const CardsUsers = (props) => {
    const { data, token, amigos, setAmigos, user } = props;
    const [isFriend, setIsFriend] = useState(false);
    const URLBase = 'https://artline-team10.herokuapp.com/artline/usuarios';
    // const [nuevoUser, setNuevoUser] = useState([]);
    const [idUser] = useState(data.id);
    const defaultImage = 'https://res.cloudinary.com/artline/image/upload/v1639691766/artline/default_eiezxq.jpg'

    useEffect(() => {
        estadoInicial();
    }, [amigos]);

    const estadoInicial = () => {
        const sonAmigos = amigos.includes(data.id);
        if (sonAmigos)
            setIsFriend(true);
        else
            setIsFriend(false);
    };

    const handleFriend = async () => {
        if (amigos.includes(idUser)) { // YA son amigos (eliminar amigo)
            const posicion = amigos.indexOf(data.id);
            amigos.splice(posicion, 1);
            modificarAmigo();
        } else {// (agregar amigo)
            amigos.push(idUser);
            modificarAmigo();
        }
    };

    const modificarAmigo = async () => {
        const data = { amigos }
        const opciones = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ data })
        };
        // modifica usuario
        const result = await fetch(`${URLBase}/${user[0].id}`, opciones);
        const newUser = await result.json();
        setAmigos(newUser.amigos);
    }

    return (
        <>
            <Card sx={{ maxWidth: 475 }} key={data.id} >
                <CardMedia
                    component="img"
                    alt="Foto de Perfil"
                    height="140"
                    image={data.fotoPerfil.imageURL ? data.fotoPerfil.imageURL : defaultImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {data.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" alignContent="flex-end">
                        {data.email}
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        isFriend ?
                            <>
                                <Button size="small" color="warning">Son amigos</Button>
                                <Button size="small" color="error" onClick={handleFriend}>Eliminar amigo</Button>
                            </>
                            : <Button size="small" onClick={handleFriend}>Añadir amigo</Button>
                    }

                </CardActions>
            </Card>
        </>

    );
}

export default CardsUsers;
