import { useEffect, useState } from 'react';

const PostAPI = (props) => {
    const { UserId } = props;

    const [post, setPost] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch(`https://artline-team10.herokuapp.com/Artline/publicaciones/postBYusuario/${UserId}`);
        const post = await data.text();
        console.log(post);
        setPost(post);
    }

    return [post, setPost];
}

export default PostAPI;
