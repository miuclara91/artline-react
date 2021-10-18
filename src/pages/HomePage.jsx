import React from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import '../css/home.scss';
import PerfilPage from './PerfilPage';
import ImagenInicio from "../assets/home.jpeg";
import Tema from '../helpers/Tema';

const Home = (props) => {
    // despues de verificar que este logged el usuario permitirle ver alguna vista
    const { isLogged, usuarioFake, setUserFake } = props;

    return (
        <ThemeProvider theme={Tema}>
            {
                isLogged ?
                    <PerfilPage usuarioFake={usuarioFake} setUserFake={setUserFake} />
                    :
                    <>
                        <Box textAlign="center">
                            <Typography variant="h5" color="secondary"> Inicia sesion para disfrutar de Artline</Typography>
                        </Box>
                        <Box className="header__box">
                            <img src={ImagenInicio} alt="Home" className="header__img" />
                        </Box>
                    </>
            }
        </ThemeProvider>
    );
}

export default Home;
