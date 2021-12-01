import { useEffect, useState } from 'react';

const API = (props) => {
    //const { username, password } = props;
    console.log('props->', props);
    const [user, setUser] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const opciones = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'luis', password: '123' })
    };

    const obtenerDatos = async () => {
        const data = await fetch(`https://artline-team10.herokuapp.com/artline/usuarios/entrar`, opciones);
        const user = await data.json();
        console.log(user);
        setUser(user);
    }

    return user;
}

export default API;
