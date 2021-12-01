import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useLocalStorage } from "../helpers/useLocalStorage";
import Header from "./Header";
import Footer from './Footer';
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import Login from "../pages/LoginPage";
import Signup from "./Signup";
import PerfilPage from "../pages/PerfilPage";
import Notfound from "./NotFound";

function App() {
  const [user, setUser] = useState([]);

  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
  const [username] = useLocalStorage("username", "");

  // console.log(user); // esta variable tiene los datos de la API artline para que sean usados

  const handleLogOut = (e => {
    setIsLogged(false);
  });

  return (
    <Router>
      <Header isLogging={isLogged} usuario={username} LogOut={handleLogOut} />
      <Switch>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/profile">
          {isLogged ?
            <PerfilPage />
            :
            <HomePage isLogged={isLogged} />
          }
        </Route>
        <Route path="/post">
          {isLogged ?
            <PostPage isLogged={isLogged} />
            :
            <HomePage isLogged={isLogged} />
          }
        </Route>
        <Route path="/" exact>
          <HomePage isLogged={isLogged} />
        </Route>
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;