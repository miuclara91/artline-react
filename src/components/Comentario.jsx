import React, { useEffect, useState } from 'react';
import { Typography, IconButton, ListItemAvatar, ListItemText, ListItem } from '@mui/material';
import { Bookmark as BookmarkIcon } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { useLocalStorage } from '../helpers/useLocalStorage';

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
        const response = await fetch(`${URL}${data._id}`, opciones);
        const datos = await response.json();
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
                <Avatar alt="Remy Sharp" src={data.usuario[0].fotoPerfil.imageURL} />
                {/* <Avatar sx={{ bgcolor: green[500] }} aria-label="user">
                    U
                </Avatar> */}
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
                            {data.respuesta}
                        </Typography>
                        {" - " + data.texto}
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
                            {data.usuario[0].nombre}
                        </Typography>
                        {" — " + getFecha(data.createdAt)}
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
