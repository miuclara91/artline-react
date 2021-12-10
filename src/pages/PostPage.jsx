import React, { useEffect, useState } from 'react';
import {
    Container,
    List
} from "@mui/material";

import Post from '../components/Post';
import { useLocalStorage } from '../helpers/useLocalStorage';
import '../css/PostsPage.scss';

const Postpage = (props) => {
    const URLBase = 'https://artline-team10.herokuapp.com/artline/publicaciones';
    const [isLogged] = useLocalStorage("isLogged", "");
    const [user] = useLocalStorage("user", "");

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
            const data = await fetch(`${URLBase}/postBYusuario/${user.id}`);
            const post = await data.json();
            setPost(post);
        }
    };

    return (
        <>
            <Container className="fondoPosts">
                <List style={{ margin: 50 }}>
                    {post.map((item) => (
                        <Post key={item._id} data={item} />
                    ))}
                </List>
            </Container>

        </>
    );
}

export default Postpage;
