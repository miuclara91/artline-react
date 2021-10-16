import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, Container, Typography, Avatar } from '@mui/material';
import FormDialog from './FormDialog';
import '../css/Perfil.css';

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

    const dataUser = {
        foto: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
        nombre: 'Karla Ramírez' 
    }
    return (
        <div className="cardProfile">
            <Card className="card">
                <div className="infoPerfil">
                        <Avatar
                            className="fotoPerfil"
                            alt="fotoPerfil"
                            src={dataUser.foto}
                            sx={{ width: 151, height: 151 }}
                        />
                    <div className="descripcion">
                        <h3 className="">{dataUser.nombre}</h3>
                        <h6>DESIGNER</h6>
                        <Button justIcon link className="">
                            <i className={"fab fa-twitter"} />
                        </Button>
                        <Button justIcon link className="">
                            <i className={"fab fa-instagram"} />
                        </Button>
                        <Button justIcon link className="">
                            <i className={"fab fa-facebook"} />
                        </Button>
                    </div>
                </div>
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
