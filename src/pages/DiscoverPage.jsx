import { Container, List } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CardUsers from '../components/CardsUsers.jsx';
import { useLocalStorage } from "../helpers/useLocalStorage";
import PostVacio from '../components/PostVacio';

function DiscoverPage(props) {
    // const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
    const { user, isLogged } = props;
    // const [user, setUser] = useLocalStorage("user", "");
    const [token, setToken] = useState("");
    const URLBase = 'https://artline-team10.herokuapp.com/artline/usuarios';
    const [users, setUsers] = useState([]);

    // console.log("--::::", user);
    useEffect(() => {
        if (isLogged) {
            setToken(user[1].token);
            obtenerDatos();
        }
    }, [token]);


    const obtenerDatos = async () => {
        const opciones = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };
        console.log(opciones);
        //if (!isLogged) {
        const data = await fetch(`${URLBase}/topUsuarios`, opciones);
        const user = await data.json();
        console.log("user----->", user);
        setUsers(user);


        //}
    };

    const renderUsers = (
        <Container>
            <List style={{ margin: 50 }}>
                {
                    users.map((item) => (
                        <CardUsers key={item._id} data={item} />
                    ))
                }
            </List>
        </Container>
    );
    return (
        <Container className="fondoPosts">
            {
                users.length > 0 ? renderUsers : <PostVacio />
            }
            {/* <CardUsers /> */}

        </Container>
    );
}

export default DiscoverPage;