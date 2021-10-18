import * as React from 'react';
import {Grid, Card, Typography} from '@mui/material';


const Cards =() => {
    const media =[
        
        {key:1, img:'https://images.unsplash.com/photo-1523245787856-3b2750746be9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', alt: "Street art"},
        {key:2, img:'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80', alt: "Abstract art"},
        {key:3, img:'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60', alt: "Dancing"},
        {key:4, img:'https://images.unsplash.com/photo-1583119912267-cc97c911e416?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60', alt: "Painting"},
    ]
    return (
        <Grid container spacing={2} className="container">
            <Grid item sx={{ Width:219}}>
                {media.map((content=>(
                    <Card key={content.key} className="oneCard" margin="25px">
                        <img
                            src={content.img}
                            alt={content.alt}
                            height={173}
                        />
                        <Typography gutterBottom variant="h6" component="div"> {content.alt} 
                        </Typography>
                    </Card>
                )))}
            </Grid>
        </Grid>
    );
}


export default Cards 