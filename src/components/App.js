import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useLocalStorage } from "../helpers/useLocalStorage";
import Header from "./Header";
import Footer from './Footer';
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import Login from "../pages/LoginPage";
import Signup from "./Signup";
import Comentarios from "./PostDetalle";
import PerfilPage from "../pages/PerfilPage";
import Notfound from "./NotFound";

function App() {
  const [user, setUser] = useLocalStorage("user", "");
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
  // console.log(user); // esta variable tiene los datos de la API artline para que sean usados

  const handleLogOut = (e => {
    setIsLogged(false);
  });

  return (
    <Router>
      <Header isLogging={isLogged} user={user.username} LogOut={handleLogOut} />
      <Switch>
        <Route path="/login">
          <Login user={user} setUser={setUser} isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/Signup">
          <Signup isLogged={isLogged} setIsLogged={setIsLogged}/>
        </Route>
        <Route path="/profile">
          {isLogged ?
            <PerfilPage isLogged={isLogged} user={user} setUser={setUser} />
            :
            <HomePage isLogged={isLogged} />
          }
        </Route>
        <Route exact path="/post">
          {isLogged ?
            <PostPage isLogged={isLogged} />
            :
            <HomePage isLogged={isLogged} />
          }
        </Route>
        <Route path="/post/detalle/:id">
          <Comentarios />
        </Route>
        <Route path="/" exact>
          <HomePage isLogged={isLogged} user={user} />
        </Route>
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;