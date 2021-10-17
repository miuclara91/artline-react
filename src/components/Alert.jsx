import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { Link as Pages } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function Alerta(props) {
    const { open, setOpen, logged } = props;
    const goTo = () => {
        return props.history.push('/');
    };
    if (logged) {
        return (
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                    // redirect
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Sesion iniciada. Disfruta de Artline
                    </Alert>
                </Collapse>
            </Box>
        );
    } else {
        return (
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert severity="warning"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                    props.history.push('/');
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Llena los campos porfavor. Cualquier dato es válido
                    </Alert>
                </Collapse>
            </Box>
        )
    }

}

export default Alerta;
