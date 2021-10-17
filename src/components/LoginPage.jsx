import { useState } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormGroup, Link, Switch, Typography, TextField, Card, Grid, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { withRouter } from 'react-router-dom';

import Alerta from './Alert';

import imgLogin from '../assets/login.png';
import imgLogo from '../assets/coloredLogo.png';
import '../css/login.css';
import Tema from './Tema';
import { Redirect } from 'react-router';

function Login(props) {
    const [open, setOpen] = useState(false);
    const { email, setEmail, password, setPassword, Logged, isLogged } = props;

    //Métodos
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    // };

    const handleLoggin = (event) => {
        Logged(event);
        setOpen(true);

        return < Redirect to="/your/redirect/page" />

    };




    return (
        <ThemeProvider theme={Tema}>
            <Alerta open={open} setOpen={setOpen} logged={isLogged} />
            <Box>
                <Grid container >
                    <Grid item xs={7}>
                        <Container className="login__image" >
                            <img src={imgLogin} alt="LoginImage"></img>
                        </Container>
                    </Grid>
                    <Grid item xs={5}>
                        <Container className="login__form">
                            <Box textAlign="center" mt={1}>
                                <img src={imgLogo} alt="LogoImage" ></img>
                            </Box>

                            <Box textAlign="center" mt={1} mb={1}>
                                <Typography>Log in</Typography>
                            </Box>
                            <FormControl fullWidth>
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

                                <FormGroup >
                                    <FormControlLabel control={<Switch defaultChecked />} label="Remember me" />
                                </FormGroup>

                                <Button type="submit" onClick={handleLoggin} variant="contained" >LOG IN</Button>

                            </FormControl>

                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                                mt={2}
                            >
                                <Link href="#" >Forgot password?</Link>
                                <Link href="/signup">Don’t have an account? Sign Up</Link>
                            </Stack>

                        </Container>
                    </Grid>
                </Grid>
            </Box>

        </ThemeProvider >
    );
}

export default Login;
