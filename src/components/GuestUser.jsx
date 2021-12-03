import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Tooltip, IconButton, Fab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "../assets/coloredLogo.png";

import Tema from "../helpers/Tema";

const Guestuser = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Container className="container">
                <Box className="header__box" textAlign="center">
                    <img src={Logo} alt="Logo" className="logo" />
                    <Typography variant="h4" pt={7}>
                        Welcome to Artline! The best platform for artist growth and community!
                    </Typography>
                    <Typography variant="h4" >
                        Join us on the other side!
                    </Typography>
                </Box>
                <Box textAlign="center">
                    <Button component={Link} to="/Signup" variant="contained">Sign Up </Button>
                    <Box textAlign="center" mb={1}>
                        <p className='login'>Already have an account? </p>
                        <Link to="/login">Log In</Link>
                    </Box>
                </Box>
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
