import React from 'react';
import { Container, Box, Alert, Collapse, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import { useHistory, useLocation } from "react-router";

function Alerta(props) {
    const { open, setOpen, type, text, isLogged } = props;

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/profile" } };
    let redirect = () => {
        setOpen(false);
        if (isLogged)
            history.replace(from);
    };

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert severity={type}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={redirect}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {text}
                    </Alert>
                </Collapse>
            </Box>
        </Container>

    )
}

export default Alerta;
