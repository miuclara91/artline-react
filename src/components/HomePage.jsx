import React, { Fragment, useState } from 'react';
import '../css/home.scss';
import Settings from './Settings';
import '../css/login.css';
import ImagenInicio from "../assets/home.png";


const Home = (props) => {
    // despues de verificar que este logged el usuario permitirle ver alguna vista
    const { isLogged } = props;
    console.log(isLogged);

    const usuario = ['usuario1', 'Soy el usuario fake', 'fake123@gmail.com']

    return (
        <>
            {
                isLogged ? <Settings usuario={usuario} /> : <img className="home" src={ImagenInicio} alt="Home" />
            }
        </>
    );
}

export default Home;
