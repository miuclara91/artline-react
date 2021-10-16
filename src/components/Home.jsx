import React, { Fragment, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from "./Login";
import Settings from './Settings';
import '../css/Home.css';


const Home = () => {
    // despues de verificar que este logged el usuario permitirle ver alguna vista
    const [isLogging, setIsLogging] = useState(true);

    return (
        <div className="home">
            <Header />
            {/* <div>Yo muestro el inicio de la plataforma</div> */}
            {
                isLogging ? <Settings /> : <Login />
            }
            <Footer />
        </div>
    );
}

export default Home;
