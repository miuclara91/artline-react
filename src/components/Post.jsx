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
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Comentarios from "./PostDetalle";

const Post = (props) => {
  const { userId, data } = props;
  const [like, setLike] = useState(data.likes.length); // post.like

  const [isLiked, setIsLiked] = useState(false);
  let history = useHistory();

  const dataUser = {
    foto: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
  };

  function getFecha(date) { // Funcion para convertir la fecha en formato largo
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date(date);
    return fecha.toLocaleDateString("es-ES", options)
  }
  const handleLike = () => { // Manejo del like
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    // UPDATE A PUBLICACION
    console.log(like);
  };

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
            <Typography style={{ margin: 10 }}>{data.likes.length} Likes </Typography>

            <Typography style={{ margin: 10 }}># Comments</Typography>

            <Typography style={{ margin: 10 }}># Shares</Typography>
          </IconButton>
        </CardActions>

        <CardActions>
          <IconButton aria-label="add to favorites">
            {
              data.likes.map((item) => {
                if (data.idUsuario === item)
                  isLiked = true;
                console.log(item);
                console.log(data.idUsuario);
              })
            }
            <FavoriteIcon />
            <Typography style={{ margin: 10 }} onClick={handleLike} >Like {data.likes[0]} </Typography>
          </IconButton>

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