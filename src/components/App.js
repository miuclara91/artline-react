import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useLocalStorage } from "../helpers/useLocalStorage";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from './Footer';
import Login from "./LoginPage";
import Signup from "./Signup";
const usuario = ['usuario1', 'Soy el usuario fake', 'fake123@gmail.com'];

function App() {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
  const [sesion, setSesion] = useLocalStorage("mantenerSesion", false);

  const handleLogging = (e => {
    if (email !== '' && password !== '') {
      setIsLogged(true);
    }
  });

  const handleLogOut = (e => {
      setIsLogged(false);  
  });

  return (
    <Router>
      <div>
        <Header isLogging={isLogged} usuario={usuario} LogOut={handleLogOut}/>
        <Switch>
          <Route path="/login">
            <Login isLogged={isLogged} Logged={handleLogging} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
          </Route>
          <Route path="/Signup">
          <Signup></Signup>
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
