import { Container, List } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CardUsers from '../components/CardsUsers.jsx';
import { useLocalStorage } from "../helpers/useLocalStorage";

function DiscoverPage(props) {
    const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
    // const { data } = props;
    const [user, setUser] = useLocalStorage("user", "");
    const [token, setToken] = useState(user[1].token);
    const URLBase = 'https://artline-team10.herokuapp.com/artline/usuarios';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);


    const obtenerDatos = async () => {
        const opciones = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };
        //if (!isLogged) {
        const data = await fetch(`${URLBase}/topUsuarios`, opciones);
        const user = await data.json();
        console.log(user);
        setUsers(user[0]);
        console.log(users);

        //}
    };

    return (
        <>
            {
                console.log(users)
            }
            {/* <CardUsers /> */}
            <div>No hay sugerencias en este momento</div>
        </>
    );
}

export default DiscoverPage;