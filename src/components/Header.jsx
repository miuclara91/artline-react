import React, { useState } from 'react';
import { Link as Pages } from 'react-router-dom';
// imports de componentes de material ui
import { Box, AppBar, Toolbar, Button, IconButton, Typography, Menu, Badge, MenuItem, Tooltip, Fade, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// imports de iconos de material ui
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
// imports locales
import Logo from "../assets/logo.svg";
import '../css/header.scss';
import Tema from './Tema';

function Header(props) {
    const { isLogging, usuario } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            <MenuItem onClick={handleMenuClose}>Cerrar Sesion</MenuItem>
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
                <p>{usuario[0]}</p>
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
                            sx={{ mr: 2 }}
                            sx={{ display: { sm: 'none', xs: 'block' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Logo */}
                        <Box className="header__logo" mr={1} sx={{ display: { sm: 'block', xs: 'none' } }}>
                            <img src={Logo} alt="Logo" />
                        </Box>

                        <Typography variant="h6" noWrap component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Artline
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        {/* Parte derecha del menu */}
                        {
                            isLogging ?
                                <>
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Button color="inherit" >
                                            <Pages to="/settings">
                                                <Link color="white" underline="none">
                                                    Explore
                                                </Link>
                                            </Pages>
                                        </Button>
                                    </Box>
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Button color="inherit">Settings</Button>
                                    </Box>
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                            <Badge badgeContent={100} color="error">
                                                <MailIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton
                                            size="large"
                                            color="inherit"
                                        >
                                            <Badge badgeContent={100} color="error">
                                                <NotificationsIcon />
                                            </Badge>
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
                                            <Tooltip title={usuario[0]} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} >
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
                                        <Pages to="/">
                                            <Link color="white" underline="none">
                                                Home
                                            </Link>
                                        </Pages>
                                    </Button>
                                    <Button color="inherit">
                                        <Pages to="/login">
                                            <Link color="white" underline="none">
                                                Login
                                            </Link>
                                        </Pages>
                                    </Button>
                                    <Button color="inherit">
                                        <Pages to="/signup">
                                            <Link color="white" underline="none">
                                                SingUp
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