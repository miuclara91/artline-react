import * as React from 'react';
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';
import '../css/Perfil.css';

function Cards() {
    const media = [

        { key: 1, img: 'https://www.dondeir.com/wp-content/uploads/2021/08/adidas-forum-mural-99.jpg', alt: "Street art" },
        { key: 2, img: 'https://scx2.b-cdn.net/gfx/news/2020/abstractart.jpg', alt: "Abstract art" },
        { key: 3, img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60', alt: "Dancing" },
        { key: 4, img: 'https://images.unsplash.com/photo-1583119912267-cc97c911e416?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60', alt: "Painting" },
        { key: 5, img: 'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs', alt: "Architecture" },

    ]

    return (
        <ImageList sx={{ width: 500, height: 350, overflowY: 'scroll' }} cols={2} rowHeight={164}>
            {media.map((content => (
                <Card key={content.key} sx={{ width: 'auto', height: 210, m:2, mt:0, boxShadow:3 }}>
                    <CardContent sx={{p:0}}>
                        <img
                            src={content.img}
                            alt={content.alt}
                            height={150}
                            width={'auto'}
                        />
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between'}}>
                        <Typography gutterBottom variant="h6" component="div"> {content.alt}
                        </Typography>
                        <IconButton>
                            <VisibilityIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            )))}
        </ImageList>
    );
}

export default Cards;
