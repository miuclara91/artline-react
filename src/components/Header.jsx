import React, { useState } from "react";
import { NavLink as Pages } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
//Components Material UI
import {Box,AppBar, Toolbar, Button, IconButton, Menu, Badge, MenuItem, Tooltip, Fade} from "@mui/material";
//Icons
import { Menu as MenuIcon, AccountCircle, Mail as MailIcon} from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
// Assets
import Logo from "../assets/logo.png";
//Style
import { ThemeProvider } from "@mui/material/styles";
import Tema from "../helpers/Tema";
import "../css/header.scss";

function Header(props) {
  const { isLogging, user, LogOut } = props;
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
      <Box sx={{ flexGrow: 1 }} mb={5}>
        <AppBar position="sticky" color="primary">
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

            <Box sx={{ flexGrow: 1 }} />
            {/* Parte derecha del menu */}
            {isLogging ? (
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
                      to="/post"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Post
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
                      title= {user !== undefined ? user : ""}
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
      </Box>
    </ThemeProvider>
  );
}

export default Header;
