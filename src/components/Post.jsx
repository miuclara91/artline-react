import { Avatar, ListItem, Typography, Card, CardMedia, CardActions, IconButton, Divider, CardHeader, Menu, ListItemIcon, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MoreVert as MoreVertIcon, ChatBubble as ChatBubbleIcon } from "@mui/icons-material";

import { useLocalStorage } from '../helpers/useLocalStorage';
import AlertaSesion from "./AlertaSesion";
import PostEdit from "./PostEdit"

import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Post = (props) => {
  const { data, token } = props;
  const [user] = useLocalStorage("user", "");
  const [isLogged] = useLocalStorage("isLogged");
  const URL = 'https://artline-team10.herokuapp.com/artline/publicaciones/';

  const [likes, setLikes] = useState(data.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [openAlerta, setOpenAlerta] = useState(false);

  // Menu
  const [openEdit, setOpenEdit] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenEditPost = () => {
    setAnchorEl(null); // cierra el menu
    setOpenEdit(true);
  };
  const handleCloseEditPost = () => {
    setOpenEdit(false);
  };
  const handleDeletePost = () => {
    setAnchorEl(null); // cierra el menu
    eliminarPost();
  };
  const eliminarPost = async () => {
    const opciones = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    const response = await fetch(`${URL}${data._id}`, opciones);
    const datos = await response.json();
  }


  let history = useHistory();

  useEffect(() => {
    estadoInicial();
  }, [isLiked, data]);

  const estadoInicial = () => {
    data.likes.map((item) => {
      if (data.idUsuario === item)
        setIsLiked(true);
    });
  };

  function getFecha(date) { // Funcion para convertir la fecha en formato largo
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date(date);
    return fecha.toLocaleDateString("es-ES", options)
  }

  const handleLike = () => { // Manejo del like
    if (isLogged) { // UPDATE A PUBLICACION
      // aumenta los likes del post localmente
      setLikes(isLiked ? likes - 1 : likes + 1);
      setIsLiked(!isLiked);

      if (data.likes.includes(user[0].id)) { // YA DI LIKE A ESTE POST (eliminar Like)
        const newData = data.likes;
        const posicion = newData.indexOf(user[0].id);
        newData.splice(posicion, 1);
        modificarLike(newData);
      } else {// (guardar Like)
        const newData = data.likes;
        newData.push(user[0].id);
        modificarLike(newData);
      }

    } else {
      handleOpenAlerta();
    }
  };

  const modificarLike = async (newData) => {
    const opciones = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ likes: newData })
    }
    const response = await fetch(`${URL}${data._id}`, opciones);
    const datos = await response.json();
  }

  const handleComentario = (id) => { // Manejo del comentario
    if (isLogged) { // UPDATE A PUBLICACION
      history.push(`/post/detalle/${data._id}`);
    } else {
      handleOpenAlerta();
    }
  };

  // Alerta
  const handleOpenAlerta = () => {
    setOpenAlerta(true);
  };
  const handleCloseAlerta = () => {
    setOpenAlerta(false);
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
      <MenuItem onClick={handleOpenEditPost}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Editar</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleDeletePost}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Eliminar</ListItemText>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {renderMenu}

      <Card sx={{ boxShadow: 5, maxWidth:700, marginY:2 }}>
        <CardHeader style={{ paddingBottom:0, textAlign:'left' }}
          title={data.usuario[0].nombre}
          subheader={getFecha(data.createdAt)}
          avatar={<Avatar
            alt="fotoPerfil"
            src={data.usuario[0].fotoPerfil.imageURL}
            sx={{ width: 80, height: 80 }}
          ></Avatar>}
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
        />
        <Divider />
        <ListItem>
          <Typography style={{ margin: 10 }}>{data.descripcion}</Typography>
        </ListItem>
        <CardMedia
          component="img"
          image={data.imagen}
          alt="img_exa"
        />

        <CardActions>
          <IconButton aria-label="resume" >
            <Typography style={{ margin: 10 }}>{likes} Likes </Typography>

            <Typography style={{ margin: 10 }}># Comments</Typography>
          </IconButton>
        </CardActions>

        <CardActions>
          {
            isLiked ?
              <IconButton aria-label="add to favorites" color="secondary" onClick={handleLike}>
                <FavoriteIcon />
                <Typography style={{ margin: 10 }} >Like </Typography>
              </IconButton>
              :
              <IconButton aria-label="add to favorites" onClick={handleLike} >
                <FavoriteIcon />
                <Typography style={{ margin: 10 }} >Like </Typography>
              </IconButton>
          }


          <IconButton>
            <ChatBubbleIcon />
            <Typography style={{ margin: 10 }} onClick={() => handleComentario(data._id)}>Comment</Typography>
          </IconButton>

        </CardActions>
      </Card>
      <AlertaSesion open={openAlerta} setOpen={setOpenAlerta} handleClickOpen={handleOpenAlerta} handleClose={handleCloseAlerta} />
      <PostEdit data={data} open={openEdit} setOpen={setOpenEdit} handleClickOpen={handleOpenEditPost} handleClose={handleCloseEditPost} />
    </>
  );
};

export default Post;