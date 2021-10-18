import { Avatar, List, ListItem, ListItemText, ListItemAvatar, Container } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import React, { useEffect, useState } from 'react';

const Post = (props) => {
    const { userId } = props;
    const [post, setPost] = useState([]);
    console.log(userId);
    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const post = await data.json();
        setPost(post);
    }

    return (
        <Container>
            {
                post.map((item) => (
                    <List >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.title} secondary={item.body} />
                        </ListItem>
                    </List>
                ))
            }
        </Container>
    );
}

export default Post;
