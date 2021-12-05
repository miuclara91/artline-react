import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CardMedia, CardActions, Container, Typography, IconButton, ListItemAvatar, ListItemText, Divider, List, ListItem, ListItemButton, ListItemIcon, TextField, } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Favorite as FavoriteIcon, Share as ShareIcon, ExpandMore as ExpandMoreIcon, MoreVert as MoreVertIcon, Bookmark as BookmarkIcon } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const PostDetalle = (props) => {
    //const { postId } = props;
    const postId = props.match.params.id;

    const [comentarios, setComentarios] = useState([]);
    const [post, setPost] = useState([]);


    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        if (postId !== '') {
            const data = await fetch(
                `https://artline-team10.herokuapp.com/artline/comentarios/comentariosBYpublicacion/${postId}`
            );
            const comentarios = await data.json();
            console.log(comentarios);

            const datapost = await fetch(
                `https://artline-team10.herokuapp.com/artline/publicaciones/${postId}`
            );
            const post = await datapost.json();
            console.log(post);
            setComentarios(comentarios);
            setPost(post);

        }
    };

    function getFecha(date) { // Funcion para convertir la fecha en formato largo
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fecha = new Date(date);
        return fecha.toLocaleDateString("es-ES", options)
    }

    return (
        <Container>
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
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={item.usuario[0].nombre}
                            subheader={getFecha(item.createdAt)}
                        />
                        <CardMedia
                            component="img"
                            height="194"
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
                        <ListItem alignItems="flex-start" key={item._id}
                            secondaryAction={
                                <IconButton>
                                    <BookmarkIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                                            Usuario {item.idUsuario}
                                        </Typography>
                                        {" - " + getFecha(item.createdAt)}
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
                                            {item.respuesta}
                                        </Typography>
                                        {" — " + item.texto}
                                    </React.Fragment>
                                }
                            />

                        </ListItem>

                    ))
                }

                <Divider variant="inset" component="li" />
                <TextField fullWidth id="outlined-basic" label="Nuevo Comentario" variant="outlined" color="secondary" />
            </List>

        </Container>
    );
};

PostDetalle.propTypes = {

};


export default withRouter(PostDetalle);
