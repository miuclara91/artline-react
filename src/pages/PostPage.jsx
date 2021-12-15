import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { List, Container, Typography, CardContent, Card, CardActions, Button, Link } from '@mui/material';
import Post from '../components/Post';
import PostVacio from '../components/PostVacio';
import Newpost from '../components/NewPost'
import { useLocalStorage } from '../helpers/useLocalStorage';
import '../css/PostsPage.scss';
import Tema from "../helpers/Tema";

const Postpage = (props) => {
    const { user, token } = props;
    const URLBase = 'https://artline-team10.herokuapp.com/artline/publicaciones';
    const [isLogged] = useLocalStorage("isLogged", "");
    // const [token, setToken] = useState("");
    const [post, setPost] = useState([]);
    //NewPost
    const [id] = useState(user ? user[0].id : '');
    const [PostDialog, setNewPost] = useState(false);

    const handleNewPost = (event) => { // Manejo del Dialog Post
        setNewPost(!PostDialog);
    };

    useEffect(() => {
        obtenerDatos();
    }, []);

    useEffect(() => {
        obtenerDatos();
    }, [PostDialog]);

    const obtenerDatos = async () => {
        // si islogged mostrar publicaciones de amigos
        // si no mostrar todo ramdom

        if (!isLogged) { // info random
            const data = await fetch(URLBase);
            const post = await data.json();
            setPost(post);
        } else { // info propia y (amigos future)
            // setToken(user[1].token);
            const opciones = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            };
            const data = await fetch(`${URLBase}/postBYusuario/${user[0].id}`, opciones);
            const post = await data.json();
            setPost(post);
        }
    };

    const NuevoPost = () => {
        return(
            <ThemeProvider theme={Tema} >
                <Container align='center'>
                    <Card sx={{ boxShadow: 5, minWidth: 700, marginBottom:3 }}>
                        <CardContent sx={{paddingBottom:0}}>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
                                ¡Comparte tu arte con el mundo!
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button color='secondary' component={Link} sx={{width:'100%'}} variant="contained" onClick={handleNewPost} >NEW POST</Button>
                        </CardActions>
                    </Card>
                    <Container>
                        <Newpost
                            open={PostDialog}
                            handleNewPost={handleNewPost}
                            id={id}
                        />
                    </Container>
                </Container>
            </ThemeProvider>
        )
    }


    return (
        <>
            <Container className="fondoPosts">
                <List style={{ margin: 50 }}>
                    {post.length > 0 && isLogged ? <NuevoPost/> : ''}
                    {
                        post.length > 0 ?
                            post.map((item) => (
                                < Post key={item._id} data={item} token={token} />
                            ))
                            :
                            <PostVacio />
                    }
                </List>
            </Container>

        </>
    );
}

export default Postpage;
