import React, { Fragment, useState } from 'react';
import '../css/home.scss';
import Header from './Header';
import Footer from './Footer';
import Login from "./Login";
import Settings from './Settings';
import '../css/Home.css';
import '../css/login.css';


const Home = () => {
    // despues de verificar que este logged el usuario permitirle ver alguna vista

    const [isLogging, setIsLogging] = useState(true);
    const usuario = ['Luis', 'Luis Manuel Tapia', 'tapia123@gmail.com']


    return (
        <section className="home">
            <Header isLogging={isLogging} usuario={usuario} />
            {
                isLogging ? <Settings /> : <Login />
            }
            <Footer />
        </section>
    );
}

export default Home;
