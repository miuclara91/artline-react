import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useLocalStorage } from "../helpers/useLocalStorage";
import Header from "./Header";
import Help from "../pages/Help";
import DiscoverPage from "../pages/DiscoverPage";
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
      {/* <Header isLogged={isLogged} LogOut={handleLogOut} /> */}

      <Switch>
        <Route path="/login">
          <Help user={user} isLogged={isLogged} LogOut={handleLogOut} />
          <Login user={user} setUser={setUser} isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/Signup">
          <Help isLogged={isLogged} LogOut={handleLogOut} />
          <Signup isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/discover">
          <Help user={user} isLogged={isLogged} LogOut={handleLogOut} />
          <DiscoverPage user={user} isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/profile">
          <Help user={user} isLogged={isLogged} LogOut={handleLogOut} />
          {isLogged ?
            <PerfilPage isLogged={isLogged} user={user} setUser={setUser} />
            :
            <HomePage isLogged={isLogged} />
          }
        </Route>
        <Route exact path="/post">
          <Help user={user} isLogged={isLogged} LogOut={handleLogOut} />
          {isLogged ?
            <PostPage isLogged={isLogged} user={user} />
            :
            <HomePage isLogged={isLogged} />
          }
        </Route>
        <Route path="/post/detalle/:id">
          <Help user={user} isLogged={isLogged} LogOut={handleLogOut} />
          <Comentarios />
        </Route>
        <Route path="/" exact>
          <Help user={user} isLogged={isLogged} LogOut={handleLogOut} />
          <HomePage isLogged={isLogged} user={user} />
        </Route>
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;