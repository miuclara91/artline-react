import React, { useEffect, useState } from 'react';
import {
    Container,
    List
} from "@mui/material";

import Post from '../components/Post';
import PostVacio from '../components/PostVacio';
import { useLocalStorage } from '../helpers/useLocalStorage';
import '../css/PostsPage.scss';

const Postpage = (props) => {
    const {user} = props; 
    const URLBase = 'https://artline-team10.herokuapp.com/artline/publicaciones';
    const [isLogged] = useLocalStorage("isLogged", "");
    const [token, setToken] = useState(user[1].token);
    
   

    const [post, setPost] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        // si islogged mostrar publicaciones de amigos
        // si no mostrar todo ramdom
        
        if (!isLogged) { // info random
            const data = await fetch(URLBase);
            const post = await data.json();
            setPost(post);
        } else { // info propia y (amigos future)
            setToken(user[1].token);
            const opciones = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            };
            console.log(opciones);
            const data = await fetch(`${URLBase}/postBYusuario/${user[0].id}`, opciones);
            const post = await data.json();
            setPost(post);
        }
    };


    return (
        <>
            <Container className="fondoPosts">
                <List style={{ margin: 50 }}>
                    {
                        post.length > 0 ?
                            post.map((item) => (
                                <Post key={item._id} data={item} token={token} />
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
