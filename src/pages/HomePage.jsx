import React from "react";

import { Box, Typography, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import "../css/home.scss";
import Tema from "../helpers/Tema";


import Postpage from "./PostPage";
import Guestuser from "../components/GuestUser";
import User from "../components/User";

const Home = (props) => {
  // despues de verificar que este logged el usuario permitirle ver alguna vista
  const { isLogged, usuarioFake, setUserFake } = props;

  return (
    <ThemeProvider theme={Tema}>
      
      {isLogged ? <User /> : <Guestuser />}


      <Container >
        <Box textAlign="center" mt={4}>
          <Typography variant="h3" fontFamily="Poppins">
            Lo que está pasando en el mundo artístico
          </Typography>
        </Box>
      </Container>

      <Postpage />

    </ThemeProvider>
  );
};

export default Home;
