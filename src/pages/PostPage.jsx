import React, { useEffect, useState } from 'react';
import {
    Container,
    List
} from "@mui/material";

import Post from '../components/Post';
import { useLocalStorage } from '../helpers/useLocalStorage';
import '../css/PostsPage.scss';

const Postpage = (props) => {
    const [isLogged] = useLocalStorage("isLogged", "");
    const [userId, setUserId] = useLocalStorage("userId", "614f5fdefe1ce23824bca80d");
    const [post, setPost] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        // si islogged mostrar publicaciones de amigos
        // si no mostrar todo ramdom
        if (!isLogged) { // info random
            const data = await fetch(
                `https://artline-team10.herokuapp.com/artline/publicaciones`
            );
            const post = await data.json();
            setPost(post);
        } else { // info propia y (amigos future)
            const data = await fetch(
                `https://artline-team10.herokuapp.com/artline/publicaciones/postBYusuario/${userId}`
            );
            const post = await data.json();
            setPost(post);
        }
    };

    const dataUser = {
        foto: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
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
