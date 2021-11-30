import React from "react";
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Tooltip, IconButton, Fab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import "../css/home.scss";
import Tema from "../helpers/Tema";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "../assets/coloredLogo.png";
import Post from '../components/Post';

const Home = (props) => {
  // despues de verificar que este logged el usuario permitirle ver alguna vista
  const { isLogged, usuarioFake, setUserFake } = props;

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
        <Fab color="primary" aria-label="Deslice">
        <Tooltip title={<Typography fontSize={14}>Desliza para ver las publicaciones en artline</Typography>} arrow placement="left" open="true" sx={{fontSize:'18'}}>
          <IconButton>
            <ExpandMoreIcon htmlColor="white"/>
            </IconButton>
          </Tooltip>
        </Fab>
        </Box>
      </Container>
      
      <Container >
        <Box textAlign="center" mt={4}>
          <Typography variant="h3" fontFamily="Poppins">
            Lo que está pasando en el mundo artístico
          </Typography>
        </Box>

        <Post userId=''></Post>

      </Container>
    </ThemeProvider>
  );
};

export default Home;
