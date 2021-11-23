import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Container,
  Typography,
  Card,
  Box,
  CardMedia,
  CardActions,
  IconButton,
  Divider,
  CardHeader
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";
import '../css/Posts.scss';

const Post = (props) => {
  const { userId } = props;
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(false);
  const [nombre, setNombre] = useLocalStorage("nombre", ""); // ??????????????????'''

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

  const dataUser = {
    foto: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
  };

  function verComentario(postId) {
    // history.push(`/comentarios/${postId}`);
    // alert('falta mandar a la ruta de comentario por id de publicacion' + postId);
    console.log(postId);
  }

  function getFecha(date) { // Funcion para convertir la fecha en formato largo
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date(date);
    return fecha.toLocaleDateString("es-ES", options)
  }

  const handleLike = (event) => { // Manejo del like
    setLike(!like);
    console.log(like);
  };

  return (
    <Container className="fondoPosts">
      {post.map((item) => (
        <List key={item._id} style={{ margin: 50 }}>
          <Card sx={{ boxShadow: 5 }}>
            <CardHeader style={{ margin: 10 }}
              title={item.idUsuario}
              subheader={getFecha(item.createdAt)}
              avatar={<Avatar
                alt="fotoPerfil"
                src={dataUser.foto}
                sx={{ width: 80, height: 80 }}
              ></Avatar>}
            />
            <ListItem>
              <Typography style={{ margin: 10 }}>{item.descripcion}</Typography>
            </ListItem>
            {/* <CardMedia
              component="img"
              height="30%"
              image="https://www.semana.com/resizer/2sar7iLFSpoiknWkhUh-sAFwKDM=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/RE55ORS5VRHPPLSJPA5LA3PBKY.jpg"
              alt="img_exa"
            /> */}
            <CardMedia
              component="img"
              height="30%"
              image={item.imagen}
              alt="img_exa"
            />

            <CardActions >
              <IconButton aria-label="resume" >
                <Typography style={{ margin: 10 }}>{item.likes.length} Likes </Typography>

                <Typography style={{ margin: 10 }}>{item.comentarios} Comments</Typography>

                <Typography style={{ margin: 10 }}>{item.shares} Shares</Typography>
              </IconButton>
            </CardActions>

            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                <Typography style={{ margin: 10 }} onClick={handleLike}>Like</Typography>
              </IconButton>

              <IconButton>
                <ChatBubbleIcon />
                <Typography style={{ margin: 10 }}>Comment</Typography>
              </IconButton>

              <IconButton aria-label="share">
                <ShareIcon />
                <Typography style={{ margin: 10 }}>Share</Typography>
              </IconButton>
            </CardActions>
          </Card>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </Container>
  );
};

export default Post;