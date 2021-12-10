import React, { useEffect, useState } from 'react';
import { Typography, IconButton, ListItemAvatar, ListItemText, Divider, List, ListItem, ListItemButton, ListItemIcon, TextField, Button, Stack, } from '@mui/material';
import { Favorite as FavoriteIcon, Share as ShareIcon, Send as SendIcon, MoreVert as MoreVertIcon, Bookmark as BookmarkIcon } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import { useLocalStorage } from '../helpers/useLocalStorage';
import PropTypes from 'prop-types';


const Comentario = (props) => {
    const { data } = props;
    const URL = 'https://artline-team10.herokuapp.com/artline/comentarios/';
    const [isLogged] = useLocalStorage("isLogged");
    const [isAttachment, setIsAttachment] = useState(data.attachment);

    useEffect(() => {
        estadoInicial();
    }, [isAttachment]);

    const estadoInicial = () => {
        if (data.attachment)
            setIsAttachment(true);
    };

    function getFecha(date) { // Funcion para convertir la fecha en formato largo
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fecha = new Date(date);
        return fecha.toLocaleDateString("es-ES", options)
    };

    const handleAttachment = () => {
        if (isLogged) { // UPDATE A PUBLICACION
            // pone attachment localmente
            setIsAttachment(!isAttachment);
            modificarComentario(isAttachment);
        } else {
            alert('inicie sesion para continuar');
        }
    };

    const modificarComentario = async (newData) => {
        const opciones = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ attachment: newData })
        };
        console.log(`${URL}${data._id}`);
        console.log(opciones);
        const response = await fetch(`${URL}${data._id}`, opciones);
        const datos = await response.json();
        console.log("cambiado: ", datos);
    }


    return (
        <ListItem alignItems="flex-start" key={data._id}
            secondaryAction={
                isAttachment ?
                    <IconButton onClick={handleAttachment}>
                        <BookmarkIcon color="secondary" />
                    </IconButton>
                    :
                    <IconButton onClick={handleAttachment}>
                        <BookmarkIcon />
                    </IconButton>
            }
        >
            <ListItemAvatar>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" > */}
                <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    U
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Usuario {data.idUsuario}
                        </Typography>
                        {" - " + getFecha(data.createdAt)}
                    </>
                }
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {data.respuesta}
                        </Typography>
                        {" — " + data.texto}
                    </React.Fragment>
                }
            />

        </ListItem>
    );
};


Comentario.propTypes = {
    // data 
};


export default Comentario;
