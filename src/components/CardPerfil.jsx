import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//Components Material UI
import { Button, Card, CardActions, CardContent, Container, Typography, Avatar, Tab, Tabs, Box } from '@mui/material';
//Components
import { useLocalStorage } from "../helpers/useLocalStorage";
import FormDialog from './FormDialog';
import Galeria from './Galeria';
import Favoritos from './Favoritos';
import Cards from './Cards';
import Newpost from './NewPost'
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
    // const { user, setUser } = props;
    const [user, setUser] = useLocalStorage("user", "");
    const [token, setToken] = useState(user[1].token);
    const [editar, setEditar] = useState(false);
    const [Post, setNewPost] = useState(false);
    // obtenemos la informacion de una consulta con el id de localStorage
    const [infoUsuario, setInfoUsuario] = useState({});
    const [fotoPerfil, setFotoPerfil] = useState('');
    const [id, setId] = useState(user[0].id);
    const [value, setValue] = useState(0);//Valor de los botones de galeria,favoritos,colecciones

    const HOST = "https://artline-team10.herokuapp.com/artline/usuarios/";
    //const HOST_TEST = "http://localhost:4001/Artline/usuarios";

    const obtenerDatos = async () => {//Obtiene de la base de datos la información del usuario
        const opciones = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };

        const data = await fetch(`${HOST}/${id}`, opciones);

        const userInfo = await data.json();
        setInfoUsuario(userInfo)
        setFotoPerfil(userInfo.fotoPerfil.imageURL)
    }

    useEffect(() => {//Carga datos por primera vez
        setId(user[0].id)
        obtenerDatos();
    }, []);

    useEffect(() => {//Carga datos al cerrar la ventana de editar
        obtenerDatos();
    }, [editar]);

    const handleChange = (event, newValue) => {//Manejar el valor del tab seleccionado
        setValue(newValue);
    };

    const handleEditar = (event) => { // Manejo del Dialog Editar
        setEditar(!editar);
    };

    const handleNewPost = (event) => { // Manejo del Dialog Post
        setNewPost(!Post);
    };

    return (
        <Box>
            <div className="fondoPerfil"></div>
            <div className="cardProfile">
                <Card className="card">
                    <CardActions sx={{ justifyContent: 'right' }}>
                        <ColorButton className="navButton" onClick={handleNewPost} sx={{ justify: 'right', marginRight: '2%' }}>NEW POST</ColorButton>
                        <ColorButton className="navButton" onClick={handleEditar} sx={{ justify: 'right', marginRight: '2%' }}>EDIT PROFILE</ColorButton>
                    </CardActions>
                    <CardContent className="descripcion">
                        <Avatar
                            className="fotoPerfil"
                            alt="fotoPerfil"
                            src={fotoPerfil}
                            sx={{ width: 151, height: 151 }}
                        />
                        <Typography variant="h4" component="h4">
                            {infoUsuario.nombre}
                        </Typography>
                        <Typography variant="body2">
                            {infoUsuario.bio}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            @{infoUsuario.username}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            email: {infoUsuario.email}
                        </Typography>

                        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', justifyContent: 'center' }} >
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
                    <Newpost
                        open={Post}
                        handleNewPost={handleNewPost}
                        id={id}
                    />
                </Container>
                <Container>
                    <FormDialog
                        open={editar}
                        handleEditar={handleEditar}
                        infoUsuario={infoUsuario}
                        data={{ 'token': user[1].token }}
                        setUser={setUser}
                    />
                </Container>
            </div>
        </Box>
    );
};


CardPerfil.propTypes = {
    //f
};


export default CardPerfil;