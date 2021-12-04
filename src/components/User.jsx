import React from 'react';
//Components Material UI
import { Box, Typography, Container, Tooltip, Fab } from "@mui/material";
//Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//Assets
import Logo from "../assets/coloredLogo.png";
//Style
import { ThemeProvider } from "@mui/material/styles";
import Tema from "../helpers/Tema";

const Guestuser = (props) => {
    const {user} = props;

    return (
        <ThemeProvider theme={Tema}>
            <Container className="container">
                <Box className="header__box" textAlign="center">
                    <img src={Logo} alt="Logo" className="logo" />
                    <Typography variant="h4" pt={7}>
                        Welcome to Artline 
                        <Typography variant="h4" color="primary" >{user.nombre}!</Typography> 
                        The best platform for artist growth and community!
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
