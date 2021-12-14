import { useState } from 'react';
//Components Material UI
import { Box, Button, Container, FormControl, FormControlLabel, FormGroup, Link, Switch, Typography, TextField, Grid, Stack } from '@mui/material';
//Components
import Alerta from '../components/Alert';
import { useLocalStorage } from "../helpers/useLocalStorage";
//Assets
import imgLogin from '../assets/login.png';
import imgLogo from '../assets/coloredLogo.png';
//Style
import { ThemeProvider } from '@mui/material/styles';
import Tema from '../helpers/Tema';
import '../css/login.scss';

function Login(props) {
    const { isLogged, setIsLogged, user, setUser } = props;
    // const [user, setUser] = useLocalStorage("user", "");

    const [open, setOpen] = useState(false);
    const [textoRespuesta, setTextoRespuesta] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const HOST = "https://artline-team10.herokuapp.com/artline/usuarios/entrar";
    const HOST_TEST = "http://localhost:4001/Artline/usuarios/entrar";

    //Métodos de captura Textfiled
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const obtenerDatos = async () => {
        const opciones = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };

        const data = await fetch(HOST, opciones);
        const user = await data.json();

        if (user.error) {
            setTextoRespuesta(user.error);
        } else {
            setIsLogged(true);
            setTextoRespuesta(`Bienvenid@ ${user.nombre} Disfruta de Artline. Cierra esta alerta para ver tu perfil`)
        }
        setUser([
            { id: user.id },
            { token: user.token },
            { username: user.username },
            { email: user.email },
            { nombre: user.nombre },
            { fotoPerfil: user.fotoPerfil.imageURL },
            { bio: user.bio }
        ]);
        console.log("userrjhdkjfjsd:    -> ", user);
    }

    const HandleLoggin = (event) => {
        obtenerDatos();
        setOpen(true); // abre alerta
    };

    return (
        <ThemeProvider theme={Tema}>
            { // conditional render para alerta
                isLogged ?
                    <Alerta open={open}
                        setOpen={setOpen}
                        isLogged={isLogged}
                        type="success"
                        text={textoRespuesta}
                    />
                    :
                    <Alerta open={open}
                        setOpen={setOpen}
                        isLogged={isLogged}
                        type="warning"
                        text={textoRespuesta}
                    />
            }
            <Container className="login__container">
                <Grid container >
                    <Grid item xs={6}>
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
                                    label="Email Address"
                                    value={email}
                                    onChange={handleEmailChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    type="password"
                                    label="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    margin="normal"
                                    required
                                />
                                <FormGroup >
                                    <FormControlLabel control={<Switch defaultChecked />} label="Remember me" />
                                </FormGroup>
                                <Button type="submit" onClick={HandleLoggin} variant="contained" >LOG IN</Button>
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
            </Container>
        </ThemeProvider >
    );
}

export default Login;
