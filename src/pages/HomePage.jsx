import React from "react";
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import "../css/home.scss";
import ImagenInicio from "../assets/home.jpeg";
import Tema from "../helpers/Tema";

import Post from '../components/Post';

const Home = (props) => {
  // despues de verificar que este logged el usuario permitirle ver alguna vista
  const { isLogged, usuarioFake, setUserFake } = props;

  return (
    <ThemeProvider theme={Tema}>
      <Container sx={{ display: 'flex' }}>
        <Box className="header__box">
          <img src={ImagenInicio} alt="Home" className="header__img" />
        </Box>
        <Box textAlign="center">
          <Typography variant="h3" color="secondary">
            Únete a Artline hoy mismo.
          </Typography>
          <Button component={Link} to="/Signup" variant="outlined">Sign Up </Button>
          <Box textAlign="center">
            <p>¿Ya tienes una cuenta? </p>
            <Link to="/login">Log In</Link>
          </Box>
        </Box>
      </Container>
      <Container >
        <Box textAlign="center" mt={4}>
          <Typography variant="h3" color="primary">
            Lo que está pasando en el mundo artístico
          </Typography>
        </Box>

        <Post userId=''></Post>

      </Container>
    </ThemeProvider>
  );
};

export default Home;
