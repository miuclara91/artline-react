import { Avatar, List, ListItem, ListItemText, ListItemAvatar, Container, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";
import "../css/post.scss";



import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const Post = (props) => {
  const { userId } = props;
  const [post, setPost] = useState([]);
  const [nombre, setNombre] = useLocalStorage("nombre", "");

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    if (userId !== '') {
      const data = await fetch(
        `https://artline-team10.herokuapp.com/artline/publicaciones/postBYusuario/${userId}`
      );
      const post = await data.json();
      setPost(post);
    } else {
      const data = await fetch(
        `https://artline-team10.herokuapp.com/artline/publicaciones`
      );
      const post = await data.json();
      setPost(post);
    }
  };

  function verComentario(idPost) {
    // history.push(`/comentarios/${idPost}`);
    alert('falta mandar a la ruta de comentario por id de publicacion' + idPost);
  }

  const dataUser = {
    foto: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
  };

  return (
    <Container>
      {post.map((item) => (
        <List>
          <ListItem key={item._id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" color='secondary' onClick={verComentario(item.id)}>
                <CommentIcon />
              </IconButton>
            } >
            <ListItemAvatar style={{ margin: 10 }}>
              <Avatar
                alt="fotoPerfil"
                src={dataUser.foto}
                sx={{ width: 80, height: 80 }}>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.idUsuario} secondary={item.descripcion} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </Container>
  );
};

export default Post;