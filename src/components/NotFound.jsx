import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Typography, Container, Button} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Logo from "../assets/error-404.png";
import "../css/notFound.scss";
import Tema from "../helpers/Tema";

const Notfound = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Container className="containerNotfound">
                <Box className="header__boxNotfound" textAlign="center">
                    <img src={Logo} alt="Logo" className="logoNotfound" />
                    <Typography variant="h5" py={2} sx={{fontWeight:"bold"}}>
                        Esta página no está disponible
                    </Typography>
                    <Button component={Link} to="/" variant="contained"> Ir a Home <HomeIcon fontSize="small" sx={{paddingLeft:1}}/> </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Notfound;
