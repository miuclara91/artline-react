import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

const Galeria = () => {
    const imagenes =[
        {key:1, img:'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo'},
        {key:2, img:'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'},
        {key:3, img:'https://i.picsum.photos/id/1035/5854/3903.jpg?hmac=DV0AS2MyjW6ddofvSIU9TVjj1kewfh7J3WEOvflY8TM'},
        {key:4, img:'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk'},
        {key:5, img:'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs'},
        {key:6, img:'https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA'},
        {key:7, img:'https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc'},
    ]
    return (
        <ImageList sx={{ width: 500, height: 350 }} cols={3} rowHeight={164}>
            {imagenes.map((imagen) => (
                <ImageListItem key={imagen.key}>
                    <img
                        src={imagen.img}
                        alt={imagen.img}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Galeria;