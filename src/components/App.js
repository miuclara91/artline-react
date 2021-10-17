import HomePage from "./HomePage";
import Header from "./Header";
import Footer from './Footer';
import Login from "./LoginPage";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const usuario = ['usuario1', 'Soy el usuario fake', 'fake123@gmail.com'];


function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogging = (event) => {
    setIsLogged(!isLogged);
    //redirectionar a home no sirve
    if (isLogged) {
      return (<Redirect to="/your/redirect/page" />);
    } else {
      return (<div>Login Please</div>);
    }
  }

  return (
    <Router>
      <div>
        <Header isLogging={isLogged} usuario={usuario} />
        <Switch>
          <Route path="/login">
            <Login Logged={handleLogging} />
          </Route>
          <Route path="/signup">
            <h1>Registrarse</h1>
          </Route>
          <Route path="/settings">
            <HomePage isLogged={isLogged} usuario={usuario} />
          </Route>
          <Route path="/">
            <HomePage isLogged={isLogged} usuario={usuario} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
