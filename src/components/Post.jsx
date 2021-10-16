import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import React, { useEffect, useState } from 'react';

const Post = (props) => {
    const { userId } = props;
    const [post, setPost] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const post = await data.json();
        setPost(post);
    }

    return (
        <div>
            {
                post.map((item) => (
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
        </div>
    );
}

export default Post;
