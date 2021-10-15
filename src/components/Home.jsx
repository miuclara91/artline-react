import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from "./Login";
import Perfil from './Perfil';

const Home = () => {
    return (
        <div>
            <Header />
            <div>Yo muestro el inicio de la plataforma</div>
            <Perfil />
            <h1>Artline React</h1>
            <Login />
            <Footer />
        </div>
    );
}

export default Home;
