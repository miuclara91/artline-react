import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import Logo from "../assets/coloredLogo.png";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AlertaSesion(props) {
    const { open, handleClose } = props;

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Por favor Registrese para poder continuar</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Box className="header__box" textAlign="center">
                            <img src={Logo} alt="Logo" className="logo" />
                            <Typography variant="h5" pt={7}>
                                Welcome to Artline! The best platform for artist growth and community!
                            </Typography>
                            <Typography variant="h6" >
                                Join us on the other side!
                            </Typography>
                        </Box>
                        <Box textAlign="center">

                            <Button component={Link} to="/Signup" variant="contained">Sign Up </Button>
                            <Box textAlign="center" mb={1}>
                                <p className='login'>Already have an account? </p>
                                <Link to="/login">Log In</Link>
                            </Box>
                        </Box>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertaSesion;