
import { useEffect, useState } from 'react';

const FakeAPI = (props) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const user = await data.json();
        setUser(user);
    }

    return [user, setUser];
}

export default FakeAPI;
