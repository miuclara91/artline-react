import React, { Fragment, useState } from 'react';
import '../css/home.scss';
import Header from './Header';
import Footer from './Footer';
import Login from "./Login";
import Settings from './Settings';


const Home = () => {
    // despues de verificar que este logged el usuario permitirle ver alguna vista
    const [isLogging, setIsLogging] = useState(true);
    const usuario = ['Luis', 'Luis Manuel Tapia', 'tapia123@gmail.com']

    return (
        <section>
            <Header isLogging={isLogging} usuario={usuario} />

            <section>Yo muestro el inicio de la plataforma</section>
            {
                isLogging ? <Settings /> : <Login />
            }
            <Footer />
        </section>
    );
}

export default Home;
