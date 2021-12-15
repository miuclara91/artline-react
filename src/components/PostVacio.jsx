import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Container, Typography, CardContent, Card, CardMedia, CardActions, Button, Link} from '@mui/material';
import { useLocalStorage } from "../helpers/useLocalStorage";
import Tema from "../helpers/Tema";
import Newpost from './NewPost'
import NoPost from "../assets/noPost.png";

const Postvacio = () => {
    const [user] = useLocalStorage("user", "");
    const [id] = useState(user ? user[0].id : '');
    const [Post, setNewPost] = useState(false);

    const handleNewPost = (event) => { // Manejo del Dialog Post
        setNewPost(!Post);
    };
    return (
        <ThemeProvider theme={Tema}>
            <Container align='center'>
                <Card sx={{ boxShadow: 5, maxWidth: 500 }}>
                    <CardMedia component="img" image={NoPost} alt="noPost icon" className='mb-0'/>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            ¡Aún no has compartido tu arte!
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:'center'}}>
                        <Button component={Link} variant="contained" onClick={handleNewPost} >NEW POST</Button>
                    </CardActions>
                </Card>
                <Container>
                    <Newpost
                        open={Post}
                        handleNewPost={handleNewPost}
                        id={id}
                    />
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default Postvacio;
