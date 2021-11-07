import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useLocalStorage } from "../helpers/useLocalStorage";
import FakeAPI from "../helpers/fakeAPI";
import Header from "./Header";
import Footer from './Footer';
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import Login from "../pages/LoginPage";
import Signup from "./Signup";
import PerfilPage from "../pages/PerfilPage";

function App() {
  const [userFake, setUser] = FakeAPI("", "");

  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
  const [username, setUsername] = useLocalStorage("username", "");
  const [nombre, setNombre] = useLocalStorage("nombre", "");
  const [bio, setBio] = useLocalStorage("bio", "");

  console.log(nombre);
  const handleLogging = (e => {
    if (email !== '' && password !== '') {
      setIsLogged(true);
      setUsername(userFake[0].username);
      setEmail(userFake[0].email);
      setNombre(userFake[0].name);
      setBio(userFake[0].company.catchPhrase);
    }
  });

  const handleLogOut = (e => {
    setIsLogged(false);
  });

  return (
    <Router>
      <Header isLogging={isLogged} usuario={username} LogOut={handleLogOut} />
      <Switch>
        <Route path="/login">
          <Login isLogged={isLogged} Logged={handleLogging} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/profile">
          {isLogged ?
            <PerfilPage usuarioFake={userFake[0]} setUserFake={setUser} />
            :
            <HomePage isLogged={isLogged} usuarioFake={userFake[0]} setUser={setUser} />
          }
        </Route>
        <Route path="/post">
          {isLogged ?
            <PostPage isLogged={isLogged} usuario={userFake} />
            :
            <HomePage isLogged={isLogged} usuarioFake={userFake[0]} setUser={setUser} />
          }
        </Route>
        <Route path="/">
          <HomePage isLogged={isLogged} usuario={userFake} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;