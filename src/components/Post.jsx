import {
  Avatar,
  ListItem,
  Typography,
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Divider,
  CardHeader
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Comentarios from "./PostDetalle";

const Post = (props) => {
  const { data } = props;
  const URL = 'https://artline-team10.herokuapp.com/artline/publicaciones/';

  const [likes, setLikes] = useState(data.likes.length);

  const [isLiked, setIsLiked] = useState(false);

  let history = useHistory();

  useEffect(() => {
    estadoInicial();
  }, [isLiked]);

  const estadoInicial = () => {
    data.likes.map((item) => {
      if (data.idUsuario === item)
        setIsLiked(true);
    });
  };

  const dataUser = {
    foto: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
  };

  function getFecha(date) { // Funcion para convertir la fecha en formato largo
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date(date);
    return fecha.toLocaleDateString("es-ES", options)
  }

  const handleLike = () => { // Manejo del like

    // aumenta los likes del post localmente
    console.log(likes, isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);

    // UPDATE A PUBLICACION

    // guardarLike();
    console.log(likes);
  };

  const guardarLike = async () => {
    const opciones = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: '' }) // kshflkahfhdhf       revisar
    }
    const data = await fetch(URL, opciones);
  }

  const handleComentario = (id) => { // Manejo del comentario
    history.push(`/post/detalle/${data._id}`);

    // <Link to="/post/comentarios:id" component={Comentarios} />


    // history.push({
    //   pathname: '/comentarios',
    //   state: { fromDashboard: true },
    //   postId: id
    // });
    console.log(id);
  };

  return (
    <>
      <Card sx={{ boxShadow: 5 }}>
        <CardHeader style={{ margin: 10 }}
          title={data.usuario[0].nombre}
          subheader={getFecha(data.createdAt)}
          avatar={<Avatar
            alt="fotoPerfil"
            src={dataUser.foto}
            sx={{ width: 80, height: 80 }}
          ></Avatar>}
        />
        <ListItem>
          <Typography style={{ margin: 10 }}>{data.descripcion}</Typography>
        </ListItem>
        <CardMedia
          component="img"
          height="30%"
          image={data.imagen}
          alt="img_exa"
        />

        <CardActions >
          <IconButton aria-label="resume" >
            <Typography style={{ margin: 10 }}>{likes} Likes </Typography>

            <Typography style={{ margin: 10 }}># Comments</Typography>

            <Typography style={{ margin: 10 }}># Shares</Typography>
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

          <IconButton aria-label="share">
            <ShareIcon />
            <Typography style={{ margin: 10 }}>Share</Typography>
          </IconButton>
        </CardActions>
      </Card>
      <Divider variant="middle" />
      <Divider variant="middle" />
    </>
  );
};

export default Post;