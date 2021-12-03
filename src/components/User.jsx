import React from 'react';
import { Box, Typography, Container, Tooltip, Fab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "../assets/coloredLogo.png";
import { useLocalStorage } from "../helpers/useLocalStorage";

import Tema from "../helpers/Tema";

const Guestuser = () => {
    const [nombre] = useLocalStorage("nombre", "");

    return (
        <ThemeProvider theme={Tema}>
            <Container className="container">
                <Box className="header__box" textAlign="center">
                    <img src={Logo} alt="Logo" className="logo" />
                    <Typography variant="h4" pt={7}>
                        Welcome to Artline! {nombre} The best platform for artist growth and community!
                    </Typography>
                    <Typography variant="h4" >
                        Join us on the other side!
                    </Typography>
                </Box>

                aqui puedo pubicar, a mostrar mi foto de usuario, ¿Inspirate! usuario'
                es decir llamar a componente new post

                <Box textAlign="end" pr={1}>
                    <Tooltip title={<Typography fontSize={14}>Desliza para ver las publicaciones en artline</Typography>} arrow placement="left" open={true} sx={{ fontSize: '18' }}>
                        <Fab color="primary">
                            <ExpandMoreIcon />
                        </Fab>
                    </Tooltip>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Guestuser;
