import {
  Box,
  Container,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";

import "../css/signup_card.scss";
import imgLogo from "../assets/coloredLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "./Alert";

import { ThemeProvider } from "@mui/material/styles";
import Tema from "../helpers/Tema";
import "../css/login.scss";
import "../css/Signup.scss";

function Signup_Card(props) {
  const { isLogged, setIsLogged } = props;
  const [newUser, setNewUser] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [textRes, setTextRes] = useState("");
  const [openAll, setOpenAll] = useState(false);

  const HOST = "https://artline-team10.herokuapp.com/artline/usuarios/";
  const HOST_TEST = "http://localhost:4001/Artline/usuarios/";

  //Métodos
  const handleNewEmail = (event) => {
    setNewEmail(event.target.value);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleNewUser = (event) => {
    setNewUser(event.target.value);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const createUserArtline = async (_user, _name, _email, _password) => {
    const allInfo = {
      username: _user,
      nombre: _name,
      email: _email,
      password: _password,
    };

    if (_user !== "" && _name !== "" && _email !== "" && _password !== "") {
      const data = await fetch(HOST, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allInfo),
      });
      const userComplete = await data.text();
      console.log(userComplete);
      setIsLogged(true);
      setOpenAll(true);
      setTextRes(
        `¡¡Bienvenid@ ${allInfo.nombre} a nuestra comunidad!! Gracias por registrarte.`
      );
    }
  };

  return (
    <ThemeProvider theme={Tema}>
      {
        // conditional render para alerta
        isLogged ? (
          <Alerta
            open={openAll}
            setOpen={setOpenAll}
            isLogged={isLogged}
            type="success"
            text={textRes}
          />
        ) : (
          <Alerta
            open={openAll}
            setOpen={setOpenAll}
            isLogged={isLogged}
            type="warning"
            text={textRes}
          />
        )
      }
      <Box className="signup">
      <Card variant="outlined" className="Card">
        <CardContent className="Container">
          <Container >
            <img src={imgLogo} alt="imgLogo"></img>
          </Container>
          <Typography id="Title"> Sign Up </Typography>
          <div className="pair">
            <TextField
              id="Username"
              label="Username *"
              placeholder="Username"
              onChange={handleNewUser}
            />
            <TextField
              id="fullName"
              label="Full Name *"
              placeholder="fullName"
              onChange={handleNewName}
            />
          </div>
          <TextField
            id="Email Address"
            label="Email Address *"
            placeholder="Email Address"
            onChange={handleNewEmail}
          />
          <TextField
            id="Password"
            label="Password *"
            type="password"
            placeholder="Password"
            onChange={handleNewPassword}
          />

          <Button
            variant="contained"
            onClick={() =>
              createUserArtline(newUser, newName, newEmail, newPassword)
            }
          >
            Sign Up
          </Button>

          <Link to="/login">
            <Typography id="Already">
              Already have an account? Log in{" "}
            </Typography>
          </Link>
        </CardContent>
      </Card>
      </Box>
    </ThemeProvider>
  );
}
export default Signup_Card;
