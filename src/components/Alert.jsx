import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import { useHistory, useLocation } from "react-router";

function Alerta(props) {
    const { open, setOpen, type, text, isLogged } = props;

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    let redirect = () => {
        setOpen(false);
        if (isLogged)
            history.replace(from);
    };

    return (
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
    )
}

export default Alerta;
