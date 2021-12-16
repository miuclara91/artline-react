import React from 'react';
import { useState } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { useHistory } from "react-router-dom";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const PostEdit = (props) => {
    const {
        open,
        handleClose,
        data
    } = props;
    const [id] = useState(data._id);
    const [user] = useLocalStorage("user", "");
    const [token] = useState(user ? user[1].token : '');
    const [descripcion, setDescripcion] = useState(data.descripcion);
    const HOST = "https://artline-team10.herokuapp.com/artline/publicaciones";
    //const HOST_TEST = "http://localhost:4001/Artline/publicaciones"; 

    let history = useHistory();

    const handleDescripcion = (event) => {
        setDescripcion(event.target.value);
    };

    const handleSubmitInfo = async (e) => {
        e.preventDefault();
        console.log('data ->', data)
        if (descripcion !== data.descripcion) {
            let newInfo = {
                descripcion: descripcion
            }
            try {
                const data = await fetch(`${HOST}/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(newInfo),
                });
                const PostComplete = await data.json();
                console.log(PostComplete);
                handleClose()
                history.push(`/post`);
            } catch (err) {
                console.error(err);
            }
        } else {
            handleClose()
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'sm'}>
            <form onSubmit={handleSubmitInfo}>
                <DialogTitle>Editar descripción</DialogTitle>
                <DialogContent align="center">
                    <TextField
                        margin="dense"
                        id="descripcion"
                        label="Descripcion"
                        value={descripcion}
                        type="text"
                        fullWidth
                        onChange={handleDescripcion}
                        color='secondary'
                    />
                </DialogContent>
                <DialogActions>
                    {/* <Button variant="contained" color="secondary" onClick={handleEditar}>Cerrar</Button> */}

                    <Button variant="contained" color="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="contained" color="primary" type='submit'>Actualizar</Button>
                </DialogActions>
            </form>
        </Dialog >
    );
}

export default PostEdit;
