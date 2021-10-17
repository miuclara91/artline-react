import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../css/signup_card.scss';
import imgLogo from '../assets/coloredLogo.png';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';


function Signup_Card() {

    return (
        <Card variant="outlined" className="Card">
            <CardContent className="Container">
                <Container>
                    <img src={imgLogo} alt="imgLogo"></img>
                </Container>
                <Typography id="Title"> Sign Up </Typography >
                <div className="pair">
                    <TextField id="Username" label="Username *" placeholder="Username" />
                    <TextField id="Age" label="Age *" placeholder="Age" />
                </div>
                <TextField id="Email Address" label="Email Address *" placeholder="Age" />
                <TextField id="Password" label="Password *" placeholder="Age" />

                <Button variant="contained">Sign Up</Button>
                <Typography id="Already">Already have an account? Log in </Typography >
            </CardContent>
        </Card>
    );




}
export default Signup_Card;