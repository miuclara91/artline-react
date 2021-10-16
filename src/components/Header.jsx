import { AppBar, Grid, IconButton, Toolbar, Tooltip, Typography, Button, Avatar, Link } from '@mui/material';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';

import React from 'react';
import '../css/header.scss';
import imgperfil from '../assets/perfil.png';
// import Logo from '../assets/logo.png';

const lightColor = 'rgba(255, 255, 255, 0.9)';

const Header = () => {
    return (
        <>
            <AppBar
                component="div"
                color="transparent"
                position="sticky"
                elevation={0}
                sx={{ zIndex: 0 }}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Typography color="#fff" variant="h5" component="h1">
                                Artline
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link
                                href="/explore"
                                sx={{
                                    textDecoration: 'none',
                                    color: lightColor,
                                    '&:hover': {
                                        color: 'common.white',
                                    },
                                }}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Explore
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="/setting"
                                sx={{
                                    textDecoration: 'none',
                                    color: lightColor,
                                    '&:hover': {
                                        color: 'common.white',
                                    },
                                }}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Settings
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="/submit"
                                sx={{
                                    textDecoration: 'none',
                                }}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Submit art
                            </Link>
                        </Grid>
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <img src={imgperfil} alt="Perfil" className="header__imagenperfil" />
        </>

        // <nav>
        //     <AppBar />
        //     {/* <Link to="/perfil" className="link">Página 1</Link> */}
        //     <ul>
        //         <li><a href="">Inicio</a></li>
        //         <li><a href="./Perfil">Perfil</a></li>
        //         <li><a href="">Cerrar sesion</a></li>
        //     </ul>
        // </nav>
    );
}

export default Header;
