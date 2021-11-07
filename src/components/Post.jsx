import { Avatar, List, ListItem, ListItemText, ListItemAvatar, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../css/post.scss";

const Post = (props) => {
  const { userId } = props;
  const [post, setPost] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      `https://artline-team10.herokuapp.com/artline/publicaciones/postBYusuario/${userId}`
    );
    const post = await data.json();
    setPost(post);
  };

  const dataUser = {
    foto: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
  };

  return (
    <Container>
      {post.map((item) => (
        <List key={item._id}>
          <ListItem>
            <ListItemAvatar style={{ margin: 10 }}>
              <Avatar
                alt="fotoPerfil"
                src={dataUser.foto}
                sx={{ width: 80, height: 80 }}>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="aqui va titulo" secondary={item.descripcion} />
          </ListItem>
        </List>
      ))}
    </Container>
  );
};

export default Post;