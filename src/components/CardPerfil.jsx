import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components Material UI
import { Button, Card, CardActions, CardContent, Container, Typography, Avatar, Tab, Tabs, Box } from '@mui/material';
//Components
import FormDialog from './FormDialog';
import Galeria from './Galeria';
import Favoritos from './Favoritos';
import Cards from './Cards';
//Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import BrushIcon from '@mui/icons-material/Brush';
import CollectionsIcon from '@mui/icons-material/Collections';
//Style
import { styled } from '@mui/material/styles';
import '../css/Perfil.css';

const ColorButton = styled(Button)({
    color: '#000000',
    justifyContent: 'right',
    '&:hover': {
        color: '#FFFFFF',
        backgroundColor: '#3F10FC',
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Typography variant='div'>{children}</Typography>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const CardPerfil = (props) => {
    const { user, setUser } = props;

    const [editar, setEditar] = useState(false);

    // obtenemos la informacion guardada en LocalStorage
    const [email, setEmail] = useState(user.email);
    const [username, setUsername] = useState(user.username);
    const [nombre, setNombre] = useState(user.nombre);
    const [bio, setBio] = useState(user.bio);

    const [value, setValue] = useState(0);//Valor de los botones de galeria,favoritos,colecciones

    const handleChange = (event, newValue) => {//Manejar el valor del tab seleccionado
        setValue(newValue);
    };

    const handleEditar = (event) => { // Manejo del Dialog
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
    }
    return (
        <Box>
            <div className="fondoPerfil"></div>
            <div className="cardProfile">
                <Card className="card">
                    <CardActions sx={{ justifyContent: 'right' }}>
                        <ColorButton className="navButton" onClick={handleEditar} sx={{ justify: 'right', marginRight: '2%' }}>Editar</ColorButton>
                    </CardActions>
                    <CardContent className="descripcion">
                        <Avatar
                            className="fotoPerfil"
                            alt="fotoPerfil"
                            src={dataUser.foto}
                            sx={{ width: 151, height: 151 }}
                        />
                        <Typography variant="h4" component="h4">
                            {user.nombre}
                        </Typography>
                        <Typography variant="body2">
                            {user.bio}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            @{user.username}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            email: {user.email}
                        </Typography>

                        <Box
                            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', justifyContent: 'center' }}
                        >
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                <Tab icon={<BrushIcon />} label="Gallery" id={`vertical-tab-${0}`} aria-controls={`vertical-tabpanel-${0}`} />
                                <Tab icon={<FavoriteIcon />} label="Favorites" id={`vertical-tab-${1}`} aria-controls={`vertical-tabpanel-${1}`} />
                                <Tab icon={<CollectionsIcon />} label="Collections" id={`vertical-tab-${2}`} aria-controls={`vertical-tabpanel-${2}`} />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <Galeria />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Favoritos />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Cards />
                            </TabPanel>
                        </Box>
                    </CardContent>
                </Card>
                <Container>
                    <FormDialog
                        open={editar}
                        handleEditar={handleEditar}
                        data={{ 'username': username, 'nombre': nombre, 'email': email, 'bio': bio }}
                        UsernameChange={handleUsernameChange}
                        NombreChange={handleNombreChange}
                        EmailChange={handleEmailChange}
                        BioChange={handleBioChange}
                    />
                </Container>
            </div>
        </Box>
    );
};


CardPerfil.propTypes = {
    //
};


export default CardPerfil;