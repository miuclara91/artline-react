import React, { useEffect, useState } from "react";
import { NavLink as Pages } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { useLocalStorage } from "../helpers/useLocalStorage";
//Components Material UI
import { Box, AppBar, Toolbar, Button, IconButton, Menu, Badge, MenuItem, Tooltip, Fade, InputBase, Divider } from "@mui/material";
//Icons
import { Menu as MenuIcon, AccountCircle, Mail as MailIcon, Search as SearchIcon, Notifications as NotificationsIcon, MoreVert as MoreIcon } from "@mui/icons-material";
// Assets
import Logo from "../assets/logo.png";
//Style
import { ThemeProvider } from "@mui/material/styles";
import Tema from "../helpers/Tema";
import "../css/header.scss";
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

function ScrollTop(props) {


    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function BackToTop(props) {
    const { isLogged, LogOut } = props;
    const [user] = useLocalStorage("user");
    const URLBase = 'https://artline-team10.herokuapp.com/artline/publicaciones';
    const [totalPost, setTotalPost] = useState(0);
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
    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {/* <MenuItem onClick={handleMenuClose}>Settings</MenuItem> */}
            <MenuItem onClick={handleCerrarSesion}>Cerrar Sesión</MenuItem>
        </Menu>
    );

    // Renderiza menu movil
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
                <p>{user}</p>
            </MenuItem>
        </Menu>
    );
    return (
        <ThemeProvider theme={Tema}>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    {/* Boton menu */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ display: { sm: "none", xs: "block" }, mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* Logo */}
                    <Box
                        className="header__log"
                        sx={{ display: { sm: "block", xs: "none" } }}
                    >
                        <Pages to="/">
                            <img src={Logo} alt="Logo" />
                        </Pages>
                    </Box>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <Box>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar"
                            color="white"
                            inputProps={{ 'aria-label': 'buscar' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon color="white" />
                        </IconButton>
                    </Box>


                    <Box sx={{ flexGrow: 1 }} />
                    {/* Parte derecha del menu */}
                    {isLogged ? (
                        <>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <Button color="inherit">
                                    <Pages
                                        to="/profile"
                                        style={{ textDecoration: "none", color: "white" }}
                                    >
                                        Perfil
                                    </Pages>
                                </Button>
                            </Box>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <Button color="inherit">
                                    <Pages
                                        to="/discover"
                                        style={{ textDecoration: "none", color: "white" }}
                                    >
                                        Discover
                                    </Pages>
                                </Button>
                            </Box>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <Button color="inherit">
                                    <Pages
                                        to="/post"
                                        style={{ textDecoration: "none", color: "white" }}
                                    >
                                        <Tooltip title="Publicaciones hechas">
                                            {/* <Badge badgeContent={totalPost.total} color="success"> */}
                                            <Badge badgeContent={"99"} color="success">
                                                Post
                                            </Badge>
                                        </Tooltip>
                                    </Pages>
                                </Button>
                            </Box>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show 4 new mails"
                                    color="inherit"
                                >
                                    <Tooltip title="Bandeja de entreada">
                                        <Badge badgeContent={100} color="error">
                                            <MailIcon />
                                        </Badge>
                                    </Tooltip>
                                </IconButton>
                                <IconButton size="large" color="inherit">
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
                                    <Tooltip
                                        title={user !== undefined ? user : ""}
                                        TransitionComponent={Fade}
                                        TransitionProps={{ timeout: 600 }}
                                    >
                                        <AccountCircle />
                                    </Tooltip>
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                    ) : (
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Button color="inherit">
                                <Pages
                                    to="/"
                                    style={{ textDecoration: "none", color: "white" }}
                                >
                                    Home
                                </Pages>
                            </Button>
                            <Button color="inherit">
                                <Pages
                                    to="/login"
                                    style={{ textDecoration: "none", color: "white" }}
                                >
                                    Login
                                </Pages>
                            </Button>
                            <Button color="inherit">
                                <Pages
                                    to="/signup"
                                    style={{ textDecoration: "none", color: "white" }}
                                >
                                    Signup
                                </Pages>
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box sx={{ my: 2 }}>
                    {[...new Array(12)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </ThemeProvider>
    );
}