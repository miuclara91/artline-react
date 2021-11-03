import React, { useState } from 'react';
import { Link as Pages } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
// imports de componentes de material ui
import { Box, AppBar, Toolbar, Button, IconButton, Menu, Badge, MenuItem, Tooltip, Fade, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// imports de iconos de material ui
import { Menu as MenuIcon, AccountCircle, Mail as MailIcon } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
// imports locales
import Logo from "../assets/logo.png";
import '../css/header.scss';
import Tema from '../helpers/Tema';

function Header(props) {
    const { isLogging, usuario, LogOut } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/login" } };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleCerrarSesion = (e) => {
        localStorage.clear();
        history.replace(from);
        LogOut();
        handleMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // Renderiza menu
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleCerrarSesion}>Cerrar Sesion</MenuItem>
        </Menu>
    );

    // Renderiza menu movil
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Mensajes</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notificaciones</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>{usuario}</p>
            </MenuItem>
        </Menu>
    );


    return (
        <ThemeProvider theme={Tema}>
            <Box sx={{ flexGrow: 1 }} mb={5}>
                <AppBar position="sticky" color="primary">
                    <Toolbar>
                        {/* Boton menu */}
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ display: { sm: 'none', xs: 'block' }, mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Logo */}
                        <Box className="header__log" sx={{ display: { sm: 'block', xs: 'none' } } } >
                            <img src={Logo} alt="Logo" />
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        {/* Parte derecha del menu */}
                        {
                            isLogging ?
                                <>
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Button color="inherit" >
                                            <Pages to="/profile" style={{ textDecoration: "none" }}>
                                                <Link color="white" underline="none">
                                                    Perfil
                                                </Link>
                                            </Pages>
                                        </Button>
                                    </Box>
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Button color="inherit">
                                            <Pages to="/post" style={{ textDecoration: "none" }}>
                                                <Link color="white" underline="none">
                                                    Post
                                                </Link>
                                            </Pages>
                                        </Button>
                                    </Box>
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                            <Tooltip title="Bandeja de entreada">
                                                <Badge badgeContent={100} color="error">
                                                    <MailIcon />
                                                </Badge>
                                            </Tooltip>
                                        </IconButton>
                                        <IconButton
                                            size="large"
                                            color="inherit"
                                        >
                                            <Tooltip title="Notificaciones">
                                                <Badge badgeContent={100} color="error">
                                                    <NotificationsIcon />
                                                </Badge>
                                            </Tooltip>

                                        </IconButton>
                                        <IconButton
                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit"
                                        >
                                            <Tooltip title={usuario} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} >
                                                <AccountCircle />
                                            </Tooltip>
                                        </IconButton>
                                    </Box>
                                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                        <IconButton
                                            size="large"
                                            aria-label="show more"
                                            aria-controls={mobileMenuId}
                                            aria-haspopup="true"
                                            onClick={handleMobileMenuOpen}
                                            color="inherit"
                                        >
                                            <MoreIcon />
                                        </IconButton>
                                    </Box>
                                </>
                                :
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <Button color="inherit">
                                        <Pages to="/" style={{ textDecoration: "none" }}>
                                            <Link color="white" underline="none">
                                                Home
                                            </Link>
                                        </Pages>
                                    </Button>
                                    <Button color="inherit">
                                        <Pages to="/login" style={{ textDecoration: "none" }}>
                                            <Link color="white" underline="none">
                                                Login
                                            </Link>
                                        </Pages>
                                    </Button>
                                    <Button color="inherit">
                                        <Pages to="/signup" style={{ textDecoration: "none" }}>
                                            <Link color="white" underline="none">
                                                SignUp
                                            </Link>
                                        </Pages>
                                    </Button>
                                </Box>
                        }
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </ThemeProvider>
    );
}

export default Header;