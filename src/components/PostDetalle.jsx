import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Card, CardHeader, CardContent, CardMedia, CardActions, Container, Typography, IconButton, Divider, List, TextField, Button, Stack, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Favorite as FavoriteIcon, Share as ShareIcon, Send as SendIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import { useLocalStorage } from "../helpers/useLocalStorage";
import Comentario from './Comentario';

const PostDetalle = (props) => {
    const postId = props.match.params.id;
    const [user] = useLocalStorage("user");
    const URLBase = 'https://artline-team10.herokuapp.com/artline/';

    const [comentarios, setComentarios] = useState([]);
    const [post, setPost] = useState([]);
    const [comentario, setComentario] = useState("");


    // Menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Otros
    useEffect(() => {
        obtenerDatos();
    }, [comentario]);

    const obtenerDatos = async () => {
        if (postId !== '') {
            const data = await fetch(`${URLBase}/comentarios/comentariosBYpublicacion/${postId}`);
            const comentarios = await data.json();

            const datapost = await fetch(`${URLBase}/publicaciones/${postId}`);
            const post = await datapost.json();
            setComentarios(comentarios);
            setPost(post);

        }
    };

    function getFecha(date) { // Funcion para convertir la fecha en formato largo
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fecha = new Date(date);
        return fecha.toLocaleDateString("es-ES", options)
    };

    const handleComentario = (event) => {
        setComentario(event.target.value);
    };

    const handleNewComment = async (event) => {
        event.preventDefault();
        const opciones = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idUsuario: user[0].id, idPublicacion: postId, texto: comentario })
        }
        const newComment = await fetch(`${URLBase}/comentarios`, opciones);
        const respuesta = await newComment.json();
        setComentario('');
    };

    const renderMenu = (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Editar</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Eliminar</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    );


    return (
        <Container>
            {renderMenu}
            {
                post.map((item) => (
                    <Card >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton
                                    aria-label="settings"
                                    id="basic-button"
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={item.usuario[0].nombre}
                            subheader={getFecha(item.createdAt)}
                        />
                        <CardMedia
                            component="img"
                            height="400"
                            image={item.imagen}
                            alt="Imagen de post"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <p>Publicación: {item.descripcion}</p>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            </IconButton>
                        </CardActions>
                    </Card>
                ))
            }

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    comentarios.map((item) => (
                        <Comentario data={item} />
                    ))
                }

                <Divider variant="inset" component="li" />
            </List>
            <Divider variant="inset" />
            <TextField
                fullWidth
                multiline
                id="outlined-textarea"
                label="Escribe un GRAN comentario"
                placeholder="Inspirate"
                color="secondary"
                onChange={handleComentario}
            />
            <Stack direction="row" justifyContent="end" mt={1} >
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleNewComment}>
                    Comentar
                </Button>
            </Stack>

        </Container>
    );
};

PostDetalle.propTypes = {

};


export default withRouter(PostDetalle);
