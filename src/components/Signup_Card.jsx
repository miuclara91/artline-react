import {
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

function Signup_Card() {
  const [newUser, setNewUser] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

  const createUserArtline = async (user, email, password) => {
    const allInfo = {
      username: user,
      name: user,
      email: email,
      password: password,
    };
    if (user !== "" && email !== "" && password !== "") {
      const data = await fetch(
        'https://artline-team10.herokuapp.com/Artline/usuarios/',
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allInfo),
        }
      );
      const userComplete = await data.json();
      console.log(userComplete);
    }
  };

  return (
    <Card variant="outlined" className="Card">
      <CardContent className="Container">
        <Container>
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
          {/* <TextField id="Age" label="Age *" placeholder="Age" /> */}
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
          placeholder="Password"
          onChange={handleNewPassword}
        />

        <Button
          variant="contained"
          onClick={() => createUserArtline(newUser, newEmail, newPassword)}
        >
          Sign Up
        </Button>

        <Link to="/login">
          <Typography id="Already">Already have an account? Log in </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
export default Signup_Card;
