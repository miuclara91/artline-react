import React from 'react';
//Components Material UI
import { Container } from '@mui/material';
//Components
import CardPerfil from '../components/CardPerfil';

const PerfilPage = (props) => {
    const { user, setUser } = props;

    return (
        <Container>
            < CardPerfil user={user} setUser={setUser} />
        </Container>
    );
}

export default PerfilPage;
