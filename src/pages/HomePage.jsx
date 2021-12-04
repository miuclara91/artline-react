import React from "react";
//Components Material UI
import { Box, Typography, Container } from "@mui/material";
//Components
import Postpage from "./PostPage";
import Guestuser from "../components/GuestUser";
import User from "../components/User";
//Style
import { ThemeProvider } from "@mui/material/styles";
import Tema from "../helpers/Tema";
import "../css/home.scss";

const Home = (props) => {
  // despues de verificar que este AUTENTIFICADO el usuario permitirle ver alguna vista
  const { isLogged, user } = props;

  return (
    <ThemeProvider theme={Tema}>
      {isLogged ? <User user={user} /> : <Guestuser />}

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
