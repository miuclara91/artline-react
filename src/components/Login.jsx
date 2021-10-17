import { useState } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormGroup, Link, Switch, Typography, TextField } from '@mui/material';
import imgLogin from '../assets/login.png';
import imgLogo from '../assets/logo2.png';
import '../css/login.css';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logged, setLogged] = useState(false);
    

    //Métodos
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    const handleLoggin = (event) => {
        setLogged(true);
    };

    


    return (
        <Box sx={{ display: 'flex' }}>

            <Container>
                <img src={imgLogin} alt="LoginImage"></img>
            </Container>

            <Container>
                <img src={imgLogo} alt="LogoImage"></img>
                <Typography>artline</Typography>

                <Typography>Log in</Typography>

            <FormControl onSubmit={handleFormSubmit}>

                <TextField
                    type="email"
                    id="outlined-basic"
                    label="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />

                <TextField
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Remember me" />
                </FormGroup>

                <Button type="submit" onClick={handleLoggin}>LOG IN</Button>

            </FormControl>

            <Container>
                <Link href="#" className="color-purple" >Forgot password?</Link>
                <Link href="#" className="color-purple" >Don’t have an account? Sign Up</Link>
            </Container>
            </Container>

            

        </Box>
    );
}

export default Login;
