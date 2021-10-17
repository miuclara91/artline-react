import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, Container, Typography, Avatar, Tab, Tabs, Box } from '@mui/material';
import FormDialog from './FormDialog';
import Galeria from './Galeria';
import Cards from './Cards';
import '../css/Perfil.css';

//Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import BrushIcon from '@mui/icons-material/Brush';
import CollectionsIcon from '@mui/icons-material/Collections';

import { styled } from '@mui/material/styles';

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Perfil = (props) => {
    const { data } = props;
    const [editar, setEditar] = useState(false);

    const [username, setUsername] = useState(data.username);
    const [nombre, setNombre] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [bio, setBio] = useState(data.company.catchPhrase);

    const [value, setValue] = React.useState(0);//Valor de los botones de galeria,favoritos,colecciones

    const handleChange = (event, newValue) => {//Manejar el valor del tab seleccionado
        setValue(newValue);
    };

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
    }
    return (
        <div className="cardProfile">
            <Card className="card">
                {/* <div className="infoPerfil"> */}
                <CardActions sx={{ justifyContent: 'right' }}>
                    <ColorButton className="navButton" onClick={handleEditar} sx={{ justify: 'right', marginRight:'2%' }}>Editar</ColorButton>
                </CardActions>
                <CardContent className="descripcion">
                <Avatar
                    className="fotoPerfil"
                    alt="fotoPerfil"
                    src={dataUser.foto}
                    sx={{ width: 151, height: 151 }}
                />
                    <Typography variant="h4" component="h4">
                        {nombre}
                    </Typography>
                    <Typography variant="body2">
                        {bio}
                    </Typography>
                    <Typography variant="h5" component="h5">
                        @{username}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        email:{email}
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
                            <Galeria/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Información de Favoritos
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Cards/>
                        </TabPanel>
                    </Box>
                </CardContent>

                {/* </div> */}
                {/* <div className="contenido"> */}

                {/* </div> */}
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