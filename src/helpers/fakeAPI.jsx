import { useEffect, useState } from 'react';

const FakeAPI = (props) => {
    //const { username, password } = props;
    console.log('props');
    const [user, setUser] = useState([]);

    useEffect(() => {
        obtenerDatos();
        login();
        console.log('hshdsakd');
        console.log(user[0]);
    }, []);

    const opciones = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'luis', password: '123' })
    };

    const login = async () => {
        const data = await fetch(`https://artline-team10.herokuapp.com/artline/usuarios/entrar`, opciones);
        const user = await data.text();
        console.log(user);
        // setUser(user);
    }

    const obtenerDatos = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const user = await data.json();
        setUser(user);
    }

    return [user, setUser];
}

export default FakeAPI;
