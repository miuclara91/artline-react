import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import FormDialog from './FormDialog';

const Perfil = (props) => {
    const { data } = props;
    const [editar, setEditar] = useState(false);

    const [username, setUsername] = useState(data.username);
    const [nombre, setNombre] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [bio, setBio] = useState(data.company.catchPhrase);

    const handleEditar = (event) => {
        setEditar(!editar);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    return (
        <div>
            <Container>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {nombre}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {username}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {email}
                        </Typography>
                        <Typography variant="body2">
                            {bio}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleEditar}>Editar</Button>
                    </CardActions>
                </Card>
            </Container>
            <Container>
                <FormDialog
                    open={editar}
                    handleEditar={handleEditar}
                    data={data}
                    UsernameChange={handleUsernameChange}
                    NombreChange={handleNombreChange}
                    EmailChange={handleEmailChange}
                    BioChange={handleBioChange}
                />
            </Container>
        </div>
    );
};


Perfil.propTypes = {
    //
};


export default Perfil;
