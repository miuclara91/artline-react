import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Container,
  Typography,
  Card,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import React, { useEffect, useState } from "react";

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
        <List key={item._id} style={{ margin: 50}}>
          <ListItem>
            <ListItemAvatar style={{ margin: 10 }}>
              <Avatar
                alt="fotoPerfil"
                src={dataUser.foto}
                sx={{ width: 80, height: 80 }}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leanne Graham" secondary="15 min" />
          </ListItem>
          <ListItem>
            <Typography style={{ margin: 10 }}>{item.descripcion}</Typography>
          </ListItem>

          <Card>
            <CardMedia
              component="img"
              height="30%"
              image="https://www.semana.com/resizer/2sar7iLFSpoiknWkhUh-sAFwKDM=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/RE55ORS5VRHPPLSJPA5LA3PBKY.jpg"
              alt="img_exa"
            />
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                <Typography style={{ margin: 10 }}>Like</Typography>
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
        </List>
      ))}
    </Container>
  );
};

export default Post;
