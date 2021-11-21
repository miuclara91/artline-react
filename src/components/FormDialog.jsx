import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
    const {
        open,
        handleEditar,
        data,
        UsernameChange,
        NombreChange,
        EmailChange,
        BioChange
    } = props;

    console.log(data);
    const [username, setUsername] = useState(data.username);
    const [nombre, setNombre] = useState(data.nombre);
    const [email, setEmail] = useState(data.email);
    const [bio, setBio] = useState(data.bio);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        UsernameChange(event);
    };
    const handleNombreChange = (event) => {
        setNombre(event.target.value);
        NombreChange(event);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        EmailChange(event);
    };
    const handleBioChange = (event) => {
        setBio(event.target.value);
        BioChange(event);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleEditar}>
                <DialogTitle>Editar</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Modifique los campos que desee
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        value={username}
                        onChange={handleUsernameChange}
                        type="text"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        margin="dense"
                        id="nombre"
                        label="Nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="bio"
                        label="Bio"
                        value={bio}
                        onChange={handleBioChange}
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditar}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
