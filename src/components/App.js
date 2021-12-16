import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useLocalStorage } from "../helpers/useLocalStorage";
import Header from "./Header";
import Buscar from "./Buscar";
import DiscoverPage from "../pages/DiscoverPage";
import Footer from './Footer';
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import Login from "../pages/LoginPage";
import Signup from "./Signup";
import PostDetalle from "./PostDetalle";
import PerfilPage from "../pages/PerfilPage";
import Notfound from "./NotFound";

function App() {
  const [user, setUser] = useLocalStorage("user", "");
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);

  const handleLogOut = (e => {
    setIsLogged(false);
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/login">
          <Header user={user} isLogged={isLogged} LogOut={handleLogOut} />
          <Login user={user} setUser={setUser} isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/Signup">
          <Header isLogged={isLogged} LogOut={handleLogOut} />
          <Signup isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/discover">
          <Header user={user} isLogged={isLogged} LogOut={handleLogOut} />
          <Buscar />
          <DiscoverPage user={user} isLogged={isLogged} setIsLogged={setIsLogged} token={user !== "" ? user[1].token : ""} />
        </Route>
        <Route path="/profile">
          <Header user={user} isLogged={isLogged} LogOut={handleLogOut} />
          {isLogged ?
            <PerfilPage isLogged={isLogged} user={user} token={user !== "" ? user[1].token : ""} />
            :
            <HomePage isLogged={isLogged} />
          }
        </Route>
        <Route exact path="/post">
          <Header user={user} isLogged={isLogged} LogOut={handleLogOut} />
          {isLogged ?
            <PostPage isLogged={isLogged} user={user} token={user !== "" ? user[1].token : ""} />
            :
            <HomePage isLogged={isLogged} />
          }
        </Route>
        <Route path="/post/detalle/:id">
          <Header user={user} isLogged={isLogged} LogOut={handleLogOut} />
          <PostDetalle />
        </Route>
        <Route path="/" exact>
          <Header user={user} isLogged={isLogged} LogOut={handleLogOut} />

          <HomePage isLogged={isLogged} user={user} token={user !== "" ? user[1].token : ""} />
        </Route>
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;