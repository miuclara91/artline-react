import { Container, Card, CardContent, Button, Typography, TextField } from '@mui/material';

import '../css/signup_card.scss';
import imgLogo from '../assets/coloredLogo.png';
import { Link } from 'react-router-dom';

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
                <TextField id="Email Address" label="Email Address *" placeholder="Email Address" />
                <TextField id="Password" label="Password *" placeholder="Password" />

                <Button variant="contained">Sign Up</Button>
                <Link to="/login"><Typography id="Already">Already have an account? Log in </Typography ></Link>
            </CardContent>
        </Card>
    );
}
export default Signup_Card;