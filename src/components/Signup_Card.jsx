import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../css/signup_card.scss';
import imgLogo from '../assets/coloredLogo.png';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


function Signup_Card() {

    return(
    <Card variant="outlined" className="Card">
        <CardContent >  
        <Container className="Card_logo">
            <img src={imgLogo} alt="imgLogo"></img>
        </Container>
        </CardContent>
        
    </Card>
    );




}
export default Signup_Card;